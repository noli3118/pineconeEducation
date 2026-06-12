// Netlify serverless function — creates a Stripe Checkout session
// Deployed automatically at /.netlify/functions/create-checkout
//
// Required env variable in Netlify dashboard:
//   STRIPE_SECRET_KEY = sk_live_... (or sk_test_... for testing)

const Stripe = require('stripe');

// Map your Stripe product IDs to their display info
const PRODUCTS = {
  'prod_UgHaOrICi6Ryba': {
    label: 'Single Session',
    description: '1-hour tutoring session',
  },
  'prod_UgHbqPUgUQc5Zo': {
    label: 'Block of 5 Sessions',
    description: '5 × 1-hour tutoring sessions',
  },
  'prod_UgHikoDD6KtZx5': {
    label: 'Block of 10 Sessions',
    description: '10 × 1-hour tutoring sessions',
  },
};

const BASE_URL = 'https://pineconeed.netlify.app';

exports.handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  // Parse body
  let productId;
  try {
    ({ productId } = JSON.parse(event.body));
  } catch {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid request body' }),
    };
  }

  // Validate product ID
  if (!productId || !PRODUCTS[productId]) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Unknown product ID' }),
    };
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    console.error('STRIPE_SECRET_KEY environment variable is not set');
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Payment service not configured' }),
    };
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2023-10-16',
  });

  try {
    // Fetch active prices for this product from Stripe
    const prices = await stripe.prices.list({
      product: productId,
      active: true,
      limit: 1,
    });

    if (!prices.data.length) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: `No active price found for product ${productId}. Please create a price in the Stripe dashboard.`,
        }),
      };
    }

    // Create the Checkout session
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: prices.data[0].id,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${BASE_URL}/thank-you/`,
      cancel_url: `${BASE_URL}/payment/`,
      // Optional: pre-fill customer email if you collect it earlier
      // customer_email: event.queryStringParameters?.email,
    });

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: session.url }),
    };
  } catch (err) {
    console.error('Stripe error:', err.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to create checkout session. Please try again.' }),
    };
  }
};
