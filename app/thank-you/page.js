import Link from 'next/link';

export const metadata = {
  title: 'Pinecone Education — Thank You',
  description: 'Your message has been sent.',
};

export default function ThankYouPage() {
  return (
    <main className="flex-grow flex items-center justify-center py-16 px-4" role="main">
      <div className="bg-white border border-mist rounded-2xl shadow-md p-10 md:p-14 text-center w-full max-w-md">

        {/* Check circle */}
        <div className="flex justify-center mb-6" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            className="w-16 h-16 text-green-500">
            <path fillRule="evenodd" clipRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385
              2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25
              2.25a.75.75 0 001.14-.094l3.75-5.25z"/>
          </svg>
        </div>

        <h1 className="font-heading font-bold text-pine text-3xl mb-3">Thank you!</h1>
        <p className="text-[#5a6b64] mb-8 leading-relaxed">
          Your message has been sent. I&apos;ll review your note and follow up within 24 hours.
        </p>

        <Link href="/"
          className="inline-flex items-center justify-center gap-2 bg-cone hover:bg-cone-light
            text-white font-bold text-base px-7 py-3.5 rounded-full transition-colors duration-200
            cursor-pointer focus-visible:outline-2 focus-visible:outline-cone focus-visible:outline-offset-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
          Return to home
        </Link>
      </div>
    </main>
  );
}
