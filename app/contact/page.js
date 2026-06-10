export const metadata = {
  title: 'Pinecone Education — Contact',
  description: 'Get in touch with Pinecone Education. Tell us about your student and goals.',
};

export default function ContactPage() {
  const fieldClass =
    'w-full border border-mist rounded-xl px-4 py-2.5 text-sm bg-cream text-[#1e2b26] ' +
    'transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-cone focus:border-cone';

  return (
    <>
      {/* ── Hero ── */}
      <header
        style={{ background: 'linear-gradient(135deg, #1e3329 0%, #2d4a3e 55%, rgba(196,115,42,0.35) 100%)' }}
        className="text-white py-14 md:py-20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-cone-light text-xs font-bold uppercase tracking-widest mb-3">Get in touch</p>
          <h1 className="font-heading font-bold text-white"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.15' }}>
            Contact
          </h1>
        </div>
      </header>

      <main className="flex-grow py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white border border-mist rounded-2xl shadow-sm overflow-hidden">

              {/* Card header */}
              <div className="px-6 py-5 border-b border-mist flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="w-5 h-5 text-cone" aria-hidden="true">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
                </svg>
                <h2 className="font-heading font-semibold text-pine text-lg">
                  Information from potential clients
                </h2>
              </div>

              <div className="px-6 py-7">
                <p className="text-[#5a6b64] text-sm mb-7">
                  Tell us about your student and what you are looking for. We typically respond within 24 hours.
                </p>

                {/* FormSubmit.co — standard HTML form, works with Next.js static export */}
                <form
                  action="https://formsubmit.co/noahliska%40outlook.com"
                  method="POST"
                >
                  <input type="hidden" name="_subject" value="Pinecone Education — New inquiry" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value="https://pineconeed.netlify.app/thank-you/" />
                  {/* Honeypot */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="contact-website">Do not fill this out</label>
                    <input type="text" id="contact-website" name="_honey" tabIndex={-1} autoComplete="off" />
                  </div>

                  {/* Parent / guardian */}
                  <fieldset className="mb-7">
                    <legend className="text-cone text-xs font-bold uppercase tracking-widest mb-4">
                      Parent / guardian
                    </legend>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="parent-name" className="block text-sm font-semibold text-[#1e2b26] mb-1.5">
                          Parent or guardian name <span className="text-red-600" aria-label="required">*</span>
                        </label>
                        <input type="text" id="parent-name" name="parent_name"
                          required autoComplete="name" className={fieldClass} />
                      </div>
                      <div>
                        <label htmlFor="parent-phone" className="block text-sm font-semibold text-[#1e2b26] mb-1.5">
                          Phone <span className="text-red-600" aria-label="required">*</span>
                        </label>
                        <input type="tel" id="parent-phone" name="parent_phone"
                          required autoComplete="tel" className={fieldClass} />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="parent-email" className="block text-sm font-semibold text-[#1e2b26] mb-1.5">
                        Email <span className="text-red-600" aria-label="required">*</span>
                      </label>
                      <input type="email" id="parent-email" name="parent_email"
                        required autoComplete="email" className={fieldClass} />
                    </div>
                  </fieldset>

                  {/* Student */}
                  <fieldset className="mb-7">
                    <legend className="text-cone text-xs font-bold uppercase tracking-widest mb-4">
                      Student
                    </legend>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="sm:col-span-1">
                        <label htmlFor="student-name" className="block text-sm font-semibold text-[#1e2b26] mb-1.5">
                          Student name <span className="text-red-600" aria-label="required">*</span>
                        </label>
                        <input type="text" id="student-name" name="student_name"
                          required autoComplete="given-name" className={fieldClass} />
                      </div>
                      <div>
                        <label htmlFor="student-age" className="block text-sm font-semibold text-[#1e2b26] mb-1.5">
                          Age
                        </label>
                        <input type="number" id="student-age" name="student_age"
                          min="1" max="120" className={fieldClass} />
                      </div>
                      <div>
                        <label htmlFor="grade-level" className="block text-sm font-semibold text-[#1e2b26] mb-1.5">
                          Grade level <span className="text-red-600" aria-label="required">*</span>
                        </label>
                        <select id="grade-level" name="grade_level" required
                          className={`${fieldClass} cursor-pointer`}>
                          <option value="" disabled>Select</option>
                          <option value="K–2">K–2</option>
                          <option value="3–5">3–5</option>
                          <option value="6–8">6–8</option>
                          <option value="9–12">9–12</option>
                          <option value="College / other">College / other</option>
                        </select>
                      </div>
                    </div>
                  </fieldset>

                  {/* Scheduling */}
                  <fieldset className="mb-7">
                    <legend className="text-cone text-xs font-bold uppercase tracking-widest mb-4">
                      Scheduling &amp; format
                    </legend>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="scheduling" className="block text-sm font-semibold text-[#1e2b26] mb-1.5">
                          Desired scheduling
                        </label>
                        <input type="text" id="scheduling" name="desired_scheduling"
                          placeholder="e.g. weekday afternoons, weekends" className={fieldClass} />
                      </div>
                      <div>
                        <label htmlFor="sessions" className="block text-sm font-semibold text-[#1e2b26] mb-1.5">
                          How many sessions per week and how long
                        </label>
                        <input type="text" id="sessions" name="sessions_per_week_duration"
                          placeholder="e.g. once a week, 1 hour" className={fieldClass} />
                      </div>
                      <div>
                        <label htmlFor="format" className="block text-sm font-semibold text-[#1e2b26] mb-1.5">
                          In-person, remote, or both <span className="text-red-600" aria-label="required">*</span>
                        </label>
                        <select id="format" name="session_format" required
                          className={`${fieldClass} cursor-pointer`}>
                          <option value="" disabled>Select</option>
                          <option value="In-person">In-person</option>
                          <option value="Remote">Remote</option>
                          <option value="Flexible (either)">Flexible (either)</option>
                        </select>
                      </div>
                    </div>
                  </fieldset>

                  {/* Goals */}
                  <div className="mb-7">
                    <label htmlFor="about-student" className="block text-sm font-semibold text-[#1e2b26] mb-1.5">
                      About your student &amp; tutoring goals{' '}
                      <span className="text-red-600" aria-label="required">*</span>
                    </label>
                    <textarea id="about-student" name="student_and_goals" rows={5} required
                      placeholder="Brief description of your child and what you are looking for in tutoring"
                      className={`${fieldClass} resize-y`}
                    />
                  </div>

                  {/* Submit */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <button type="submit"
                      className="inline-flex items-center justify-center gap-2 bg-cone hover:bg-cone-light
                        text-white font-bold text-base px-7 py-3.5 rounded-full transition-colors duration-200
                        cursor-pointer focus-visible:outline-2 focus-visible:outline-cone focus-visible:outline-offset-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
                        <line x1="22" y1="2" x2="11" y2="13"/>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                      Send message
                    </button>
                    <p className="text-[#5a6b64] text-sm">
                      Prefer email?{' '}
                      <a href="mailto:noahliska@outlook.com"
                        className="text-cone hover:text-cone-light underline transition-colors duration-150">
                        noahliska@outlook.com
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
