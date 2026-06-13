import Link from 'next/link';

export const metadata = {
  title: 'Pinecone Education — About',
  description: 'Learn about Kenny — 8+ years of tutoring experience across K–12 and college.',
};

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    className="w-5 h-5 text-cone mt-0.5 shrink-0" aria-hidden="true">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const stats = [
  { value: '8+',         label: 'Years teaching' },
  { value: 'K–12',       label: '& College',      accent: true },
  { value: 'All',        label: 'Core subjects' },
  { value: 'In-Person',  label: '& Remote' },
];

const qualities = [
  'Patient, encouraging instruction tailored to each student',
  'Focus on study habits and long-term academic confidence',
  'Experience with diverse learning needs and styles',
  'Flexibility — in-person in Jefferson County, Boulder County or fully remote',
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <header
        style={{ background: 'linear-gradient(135deg, #1e3329 0%, #2d4a3e 55%, rgba(196,115,42,0.35) 100%)' }}
        className="text-white py-14 md:py-20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-cone-light text-xs font-bold uppercase tracking-widest mb-3">My Story</p>
          <h1 className="font-heading font-bold text-white"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.15' }}>
            About Me
          </h1>
        </div>
      </header>

      <main className="flex-grow">
        {/* ── Stats ── */}
        <section className="py-12 border-b border-mist" aria-label="Experience highlights">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map(({ value, label, accent }, i) => (
                <div key={i}
                  className="stat-card bg-white border border-mist rounded-2xl p-5 text-center shadow-sm">
                  <p className={`font-heading font-bold text-3xl leading-none ${accent ? 'text-cone' : 'text-pine'}`}>
                    {value}
                  </p>
                  <p className="text-[#5a6b64] text-sm mt-2">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Story ── */}
        <section className="py-16 md:py-20" aria-labelledby="story-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-cone text-xs font-bold uppercase tracking-widest mb-2">Background</p>
              <h2 id="story-heading" className="font-heading font-bold text-pine text-2xl md:text-3xl mb-8">
                The experience that shaped my approach
              </h2>

              <p className="text-[#5a6b64] text-lg leading-loose mb-5">
                Growing up, math and science always came naturally to me. I earned strong grades and
                understood concepts quickly, often without needing to study. Because of that, I never
                truly learned how to learn.
              </p>
              <p className="leading-loose mb-5">That changed when I got to college.</p>
              <p className="leading-loose mb-5">
                After receiving a D on my first math exam, I was stunned. It was the first of many
                difficult grades, and for the first time, natural ability wasn&apos;t enough. Even when I
                put in effort, I didn&apos;t yet know how to study effectively or break down complex
                material. That experience humbled me and ultimately shaped the course of my life.
              </p>
              <p className="leading-loose mb-5">For the first time, I sought out tutoring.</p>
              <p className="leading-loose mb-5">
                Working with a patient and thoughtful instructor transformed everything. I didn&apos;t just
                improve my grades; I gained confidence, structure, and the skills to approach challenging
                material with resilience. I experienced firsthand how powerful the right teacher can be.
              </p>
              <p className="leading-loose mb-5">That experience is what led me into education.</p>
              <p className="leading-loose mb-8">
                Over the next eight years, I worked in a variety of roles: private tutor, classroom
                instructor, and lead math and science educator. I&apos;ve had the privilege of working with
                students as young as six years old through college freshmen, across a wide range of
                subjects. I have nearly a decade of experience supporting students of different learning
                styles and abilities, including those with diverse learning needs. My work has spanned
                both in-person and remote environments, allowing me to adapt to each student&apos;s unique
                situation.
              </p>

              {/* What I bring */}
              <div className="bg-white border border-mist rounded-2xl p-6 shadow-sm">
                <h3 className="font-heading font-semibold text-pine text-lg mb-4">
                  What I bring to every session
                </h3>
                <ul className="space-y-3" role="list">
                  {qualities.map((q) => (
                    <li key={q} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="text-[#1e2b26]">{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          style={{ background: 'linear-gradient(135deg, #1e3329 0%, #2d4a3e 100%)' }}
          className="py-14 md:py-16"
          aria-labelledby="about-cta-heading"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="about-cta-heading" className="font-heading font-bold text-white text-2xl md:text-3xl mb-4">
              Want to learn more?
            </h2>
            <p className="text-white/80 mb-7 max-w-md mx-auto leading-relaxed">
              Reach out and tell me about your student — I&apos;d love to help.
            </p>
            <Link href="/contact"
              className="inline-flex items-center gap-2 bg-cone hover:bg-cone-light text-white font-bold
                text-base px-7 py-3.5 rounded-full transition-colors duration-200 cursor-pointer
                focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Get in touch
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
