import Link from 'next/link';

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
    className="w-5 h-5 text-cone" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    className="w-5 h-5 text-cone mt-0.5 shrink-0" aria-hidden="true">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

export const metadata = {
  title: 'Pinecone Education — Private Tutoring',
  description: 'Patient, personalized tutoring for students K–12 and beyond. Boulder and Jefferson County & Remote.',
};

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <header
        style={{ background: 'linear-gradient(135deg, #1e3329 0%, #2d4a3e 55%, rgba(196,115,42,0.35) 100%)' }}
        className="text-white py-20 md:py-28 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(232,149,90,0.12) 0%, transparent 60%)' }}
        />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="flex items-center gap-1.5 text-cone-light text-xs font-bold uppercase tracking-widest mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            Boulder &amp; Jefferson County &amp; Remote
          </p>

          <h1 className="font-heading font-bold text-white mb-5"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', lineHeight: '1.15', maxWidth: '38rem' }}>
            Every student has <em className="text-cone-light not-italic">potential</em> waiting to grow.
          </h1>

          <p className="text-white/85 text-lg mb-8 leading-relaxed" style={{ maxWidth: '34rem' }}>
            Patient, personalized tutoring for students K&ndash;12 and beyond. Building confidence,
            skills, and a genuine love of learning.
          </p>

          <Link href="/payment"
            className="inline-flex items-center gap-2 bg-cone hover:bg-cone-light text-white font-bold
              text-base px-7 py-3.5 rounded-full transition-colors duration-200 cursor-pointer
              focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
              <rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>
            </svg>
            View pricing &amp; book
          </Link>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-3 mt-10">
            {[
              { value: '8+',       label: 'Years Experience' },
              { value: 'Free',     label: 'First Session',    accent: true },
              { value: 'K–12',     label: '& College' },
              { value: 'All',      label: 'Core Subjects' },
            ].map(({ value, label, accent }) => (
              <div key={label}
                className="stat-card bg-white/10 border border-white/20 rounded-xl px-4 py-3 backdrop-blur-sm">
                <p className={`font-heading font-bold text-2xl leading-none ${accent ? 'text-cone-light' : 'text-white'}`}>
                  {value}
                </p>
                <p className="text-white/70 text-xs mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* ── Pricing ── */}
        <section className="py-16 md:py-20" aria-labelledby="pricing-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-cone text-xs font-bold uppercase tracking-widest mb-2">Pricing</p>
            <h2 id="pricing-heading" className="font-heading font-bold text-pine text-3xl md:text-4xl mb-10">
              Simple, transparent rates
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
              <div className="bg-white border border-mist rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-default">
                <span className="inline-block bg-pine/10 text-pine text-xs font-bold px-3 py-1 rounded-full mb-5">Standard</span>
                <h3 className="font-heading font-semibold text-pine text-lg mb-1">Per session</h3>
                <p className="font-heading font-bold text-pine text-5xl mb-1">$65</p>
                <p className="text-[#5a6b64] text-sm">Per hour-long session</p>
              </div>

              <div className="bg-white border-2 border-green-400 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-default">
                <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-5">Welcome</span>
                <h3 className="font-heading font-semibold text-pine text-lg mb-1">First session</h3>
                <p className="font-heading font-bold text-green-600 text-5xl mb-1">Free</p>
                <p className="text-[#5a6b64] text-sm">Always — no commitment</p>
              </div>

              <div className="bg-mist border border-mist rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-default">
                <p className="text-cone text-xs font-bold uppercase tracking-widest mb-4">Referral Bonus</p>
                <p className="text-[#1e2b26] text-sm leading-relaxed">
                  Refer a new client who attends at least three paid sessions and receive a{' '}
                  <strong>free session</strong> — our thank-you to you.
                </p>
              </div>
            </div>

            {/* Block discounts */}
            <div className="bg-white border border-mist rounded-2xl shadow-sm overflow-hidden max-w-2xl">
              <div className="px-6 py-4 border-b border-mist">
                <h3 className="font-heading font-semibold text-pine text-lg">Block discounts</h3>
              </div>
              <div className="divide-y divide-mist">
                {[
                  { label: 'Prepay for five sessions',  badge: '$60/session · $300 total' },
                  { label: 'Prepay for ten sessions',   badge: '$55/session · $550 total' },
                ].map(({ label, badge }) => (
                  <div key={label} className="flex items-center justify-between flex-wrap gap-3 px-6 py-4">
                    <span className="font-semibold text-[#1e2b26]">{label}</span>
                    <span className="bg-pine text-white text-sm font-bold px-4 py-1.5 rounded-full">{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Testimonial ── */}
        <section className="py-16 md:py-20 bg-white border-t border-mist" aria-labelledby="review-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-cone text-xs font-bold uppercase tracking-widest mb-2">Families say</p>
            <h2 id="review-heading" className="font-heading font-bold text-pine text-3xl md:text-4xl mb-10">
              Reviews
            </h2>

            <div className="bg-cream border border-mist rounded-2xl p-8 md:p-10 shadow-sm max-w-3xl relative">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                className="absolute top-6 right-8 w-14 h-14 text-cone/12 pointer-events-none" aria-hidden="true">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>

              <div className="flex gap-1 mb-5" aria-label="5 out of 5 stars">
                {[1,2,3,4,5].map((i) => <StarIcon key={i} />)}
              </div>

              <blockquote className="review-quote">
                <p className="text-[#1e2b26] leading-loose mb-4">
                  We have worked with Kenny for over five years and had an absolutely wonderful experience
                  with him, and I cannot recommend him highly enough. Kenny has worked with my son across
                  all academic subjects, with a particular focus on math, and the progress we&apos;ve seen
                  has been nothing short of remarkable.
                </p>
                <p className="text-[#1e2b26] leading-loose mb-4">
                  Before we started, math was a real struggle — both in terms of understanding and
                  confidence. Kenny has a gift for breaking down complex concepts into simple, manageable
                  steps that truly click. More importantly, he makes learning engaging and even enjoyable,
                  which has completely changed my son&apos;s attitude toward the subject.
                </p>
                <p className="text-[#1e2b26] leading-loose mb-4">
                  Beyond math, Kenny has been incredibly supportive in other areas as well, helping to
                  build strong study habits, organization skills, and overall academic confidence. He is
                  patient, encouraging, and consistently goes the extra mile to ensure my son not only
                  understands the material but feels proud of his progress.
                </p>
                <p className="text-[#1e2b26] leading-loose mb-4">
                  What stands out most is his ability to connect on a personal level. My son genuinely
                  looks forward to his sessions, which says everything. His grades have improved, but
                  even more importantly, his confidence and independence as a learner have grown
                  tremendously.
                </p>
                <p className="text-[#1e2b26] leading-loose">
                  If you&apos;re looking for a dedicated, knowledgeable, and truly caring tutor, I would
                  wholeheartedly recommend Kenny.
                </p>
                <footer className="mt-6 not-italic">
                  <span className="font-heading font-bold text-pine text-lg">Holly</span>
                  <span className="text-[#5a6b64] text-sm ml-2">— Parent of student</span>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section
          style={{ background: 'linear-gradient(135deg, #1e3329 0%, #2d4a3e 100%)' }}
          className="py-16 md:py-20"
          aria-labelledby="cta-heading"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="cta-heading" className="font-heading font-bold text-white text-3xl md:text-4xl mb-4">
              Ready to get started?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              The first session is always free. No commitment, no pressure — just great tutoring.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-cream text-pine font-bold
                  text-base px-7 py-3.5 rounded-full transition-colors duration-200 cursor-pointer
                  focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Get in touch
              </Link>
              <Link href="/payment"
                className="inline-flex items-center gap-2 bg-cone hover:bg-cone-light text-white font-bold
                  text-base px-7 py-3.5 rounded-full transition-colors duration-200 cursor-pointer
                  focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/><polyline points="9 16 11 18 15 14"/>
                </svg>
                Book a session
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
