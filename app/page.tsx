export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  const faqs = [
    {
      q: "Who is this toolkit for?",
      a: "Developers experiencing vision loss who want to continue their careers by transitioning to accessible development practices, screen-reader workflows, and inclusive design."
    },
    {
      q: "What do I get with the subscription?",
      a: "Access to a curated resource library, mentorship matching with experienced accessibility consultants, progress tracking tools, and a private community of developers on the same journey."
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes. Cancel your subscription at any time with no questions asked. You retain access until the end of your billing period."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          Accessibility Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Keep Coding.<br />
          <span className="text-[#58a6ff]">Vision Loss</span> Doesn&apos;t End Your Career.
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          The Accessibility Dev Transition Kit gives developers facing vision loss the curated resources, adaptive tools, and mentor connections to thrive in accessible software development.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors duration-200"
        >
          Start Your Transition — $29/mo
        </a>
        <p className="text-sm text-[#8b949e] mt-4">Cancel anytime &middot; Instant access</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
        {[
          { icon: "📚", title: "Curated Resources", desc: "Screen readers, braille displays, IDE plugins, and workflow guides hand-picked by accessibility experts." },
          { icon: "🤝", title: "Mentor Matching", desc: "Get paired with developers and consultants who have navigated the same transition successfully." },
          { icon: "📈", title: "Progress Tracking", desc: "Set milestones, track skill growth, and celebrate wins on your path to accessible development mastery." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-2">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple, Transparent Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-md mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-4">Pro Access</p>
          <div className="flex items-end justify-center gap-1 mb-2">
            <span className="text-5xl font-bold text-white">$29</span>
            <span className="text-[#8b949e] mb-2">/month</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to transition successfully</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Full resource library access",
              "1-on-1 mentor matching",
              "Progress tracking dashboard",
              "Private community access",
              "Monthly live Q&A sessions",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-200"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} Accessibility Dev Transition Kit. Built for developers, by developers.
      </footer>
    </main>
  );
}
