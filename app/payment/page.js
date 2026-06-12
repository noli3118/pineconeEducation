'use client';

import { useState } from 'react';

// Stripe product IDs — add the 10-session ID when you create it in Stripe
const PACKAGES = [
  {
    id: 'single',
    productId: 'prod_UgHaOrICi6Ryba',
    label: 'Single session',
    price: '$65',
    subLabel: 'per 1-hour session',
    featured: false,
    badge: null,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        className="w-7 h-7" aria-hidden="true">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
  {
    id: 'block5',
    productId: 'prod_UgHbqPUgUQc5Zo',
    label: 'Block of 5',
    price: '$300',
    subLabel: '$60 / session · save $25',
    featured: true,
    badge: 'Most popular',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        className="w-7 h-7" aria-hidden="true">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/>
        <polyline points="2 17 12 22 22 17"/>
        <polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
  },
  {
    id: 'block10',
    productId: 'prod_UgHikoDD6KtZx5',
    label: 'Block of 10',
    price: '$550',
    subLabel: '$55 / session · save $100',
    featured: false,
    badge: null,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        className="w-7 h-7" aria-hidden="true">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/>
        <polyline points="2 17 12 22 22 17"/>
        <polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
  },
];

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    className="w-4 h-4 text-cone mt-0.5 shrink-0" aria-hidden="true">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const ExternalArrow = ({ className = 'w-4 h-4' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className={className} aria-hidden="true">
    <line x1="7" y1="17" x2="17" y2="7"/>
    <polyline points="7 7 17 7 17 17"/>
  </svg>
);

const Spinner = () => (
  <svg className="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
  </svg>
);

async function startCheckout(productId) {
  const res = await fetch('/.netlify/functions/create-checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ productId }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || 'Something went wrong. Please try again.');
  }

  return data.url;
}

function PackageCard({ pkg, loading, onSelect, error }) {
  const isLoading = loading === pkg.id;
  const isOtherLoading = loading && loading !== pkg.id;
  const noProduct = !pkg.productId;

  const handleClick = () => {
    if (!noProduct && !loading) onSelect(pkg);
  };

  if (pkg.featured) {
    return (
      <div className="relative">
        {pkg.badge && (
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cone text-white text-xs
            font-bold px-3 py-1 rounded-full whitespace-nowrap z-10">
            {pkg.badge}
          </span>
        )}
        <button
          onClick={handleClick}
          disabled={!!loading || noProduct}
          className="group w-full bg-pine hover:bg-pine-light rounded-2xl p-7 shadow-md hover:shadow-lg
            transition-all duration-200 cursor-pointer flex flex-col gap-3 text-left
            disabled:opacity-70 disabled:cursor-not-allowed
            focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
          aria-label={`Purchase ${pkg.label} — ${pkg.price}`}
        >
          <div className="flex items-center justify-between">
            <span className="text-white">{pkg.icon}</span>
            {isLoading
              ? <span className="text-white/70"><Spinner /></span>
              : <ExternalArrow className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors duration-200" />
            }
          </div>
          <div>
            <p className="text-cone-light text-xs font-bold uppercase tracking-widest mb-1">{pkg.label}</p>
            <p className="font-heading font-bold text-white text-4xl">{pkg.price}</p>
            <p className="text-white/70 text-sm mt-1">{pkg.subLabel}</p>
          </div>
          {isLoading && (
            <p className="text-white/70 text-xs mt-1">Redirecting to Stripe…</p>
          )}
        </button>
        {error && (
          <p className="text-red-500 text-xs mt-2 text-center">{error}</p>
        )}
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={handleClick}
        disabled={!!loading || noProduct}
        className={`group w-full bg-white rounded-2xl p-7 shadow-sm hover:shadow-md
          transition-all duration-200 cursor-pointer flex flex-col gap-3 text-left
          disabled:opacity-70 disabled:cursor-not-allowed
          focus-visible:outline-2 focus-visible:outline-pine focus-visible:outline-offset-2
          ${noProduct
            ? 'border-2 border-mist'
            : 'border-2 border-mist hover:border-pine'
          }`}
        aria-label={noProduct ? `${pkg.label} — contact to purchase` : `Purchase ${pkg.label} — ${pkg.price}`}
      >
        <div className="flex items-center justify-between">
          <span className={noProduct ? 'text-pine/50' : 'text-pine group-hover:text-cone transition-colors duration-200'}>
            {pkg.icon}
          </span>
          {isLoading
            ? <span className="text-pine/50"><Spinner /></span>
            : noProduct
              ? <span className="text-xs text-bark font-semibold">Email to order</span>
              : <ExternalArrow className="w-4 h-4 text-pine/30 group-hover:text-cone/60 transition-colors duration-200" />
          }
        </div>
        <div>
          <p className="text-[#5a6b64] text-xs font-bold uppercase tracking-widest mb-1">{pkg.label}</p>
          <p className="font-heading font-bold text-pine text-4xl">{pkg.price}</p>
          <p className="text-[#5a6b64] text-sm mt-1">{pkg.subLabel}</p>
        </div>
        {isLoading && (
          <p className="text-pine/60 text-xs mt-1">Redirecting to Stripe…</p>
        )}
        {noProduct && (
          <p className="text-bark text-xs mt-1">
            <a href="mailto:noahliska@outlook.com"
              className="underline hover:text-cone transition-colors duration-150"
              onClick={(e) => e.stopPropagation()}>
              noahliska@outlook.com
            </a>
          </p>
        )}
      </button>
      {error && (
        <p className="text-red-500 text-xs mt-2 text-center">{error}</p>
      )}
    </div>
  );
}

export default function PaymentPage() {
  const [loading, setLoading] = useState(null); // id of the card currently loading
  const [errors, setErrors] = useState({});     // { [packageId]: errorMessage }

  const handleSelect = async (pkg) => {
    setLoading(pkg.id);
    setErrors({});

    try {
      const url = await startCheckout(pkg.productId);
      window.location.href = url;
    } catch (err) {
      setErrors({ [pkg.id]: err.message });
      setLoading(null);
    }
  };

  return (
    <>
      {/* ── Hero ── */}
      <header
        style={{ background: 'linear-gradient(135deg, #1e3329 0%, #2d4a3e 55%, rgba(196,115,42,0.35) 100%)' }}
        className="text-white py-14 md:py-20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-cone-light text-xs font-bold uppercase tracking-widest mb-3">Secure checkout</p>
          <h1 className="font-heading font-bold text-white mb-2"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.15' }}>
            Book a session
          </h1>
          <p className="text-white/80 text-base">
            Choose an option below — you'll be taken to Stripe's secure checkout.
          </p>
        </div>
      </header>

      <main className="flex-grow py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Package cards ── */}
          <section className="mb-12" aria-labelledby="packages-heading">
            <p className="text-cone text-xs font-bold uppercase tracking-widest mb-2">Payment options</p>
            <h2 id="packages-heading" className="font-heading font-bold text-pine text-2xl md:text-3xl mb-8">
              Choose your package
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {PACKAGES.map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  pkg={pkg}
                  loading={loading}
                  onSelect={handleSelect}
                  error={errors[pkg.id]}
                />
              ))}
            </div>

            <p className="flex items-center gap-1.5 text-[#5a6b64] text-sm mt-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <polyline points="9 12 11 14 15 10"/>
              </svg>
              Payments are processed securely by Stripe. You will not be charged until checkout is complete.
            </p>
          </section>

          {/* ── Rates & discounts ── */}
          <section aria-labelledby="rates-heading">
            <div className="bg-white border border-mist rounded-2xl shadow-sm overflow-hidden max-w-2xl">
              <div className="px-6 py-5 border-b border-mist">
                <h2 id="rates-heading" className="font-heading font-semibold text-pine text-lg">
                  Rates &amp; discounts
                </h2>
              </div>
              <div className="px-6 py-6 space-y-3 text-sm">
                {[
                  'Single session: $65 per hour',
                  <>First session: <strong>Free</strong></>,
                  'Block of 5 sessions: $300 total ($60/session)',
                  'Block of 10 sessions: $550 total ($55/session)',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckIcon />
                    <span>{item}</span>
                  </div>
                ))}
                <div className="pt-2 border-t border-mist">
                  <p>
                    <strong>Referral discount:</strong> Refer a new client who completes at least three
                    paid sessions and receive one free session.
                  </p>
                </div>
                <p className="text-[#5a6b64] pt-1">
                  Questions before paying?{' '}
                  <a href="mailto:noahliska@outlook.com"
                    className="text-cone hover:text-cone-light underline transition-colors duration-150">
                    noahliska@outlook.com
                  </a>
                </p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
