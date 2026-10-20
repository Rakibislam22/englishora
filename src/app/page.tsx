import Link from "next/link";

/* ──────────────────────────────────────────────
   DATA
────────────────────────────────────────────── */

const features = [
  {
    icon: "🎙️",
    title: "AI Speaking Coach",
    desc: "Practice real conversations with our AI coach that gives instant pronunciation and fluency feedback.",
  },
  {
    icon: "📚",
    title: "Structured Lessons",
    desc: "Follow a clear path from Beginner to Advanced with grammar, vocabulary, and reading modules.",
  },
  {
    icon: "🎮",
    title: "Gamified Learning",
    desc: "Earn XP, badges, and streak rewards that keep you motivated every single day.",
  },
  {
    icon: "🧑‍🏫",
    title: "Live Tutors",
    desc: "Book 1-on-1 sessions with certified English tutors at times that suit your schedule.",
  },
  {
    icon: "📝",
    title: "Smart Quizzes",
    desc: "Adaptive quizzes that learn your weak spots and reinforce them until you master them.",
  },
  {
    icon: "🌍",
    title: "Global Community",
    desc: "Join thousands of learners from Bangladesh and beyond. Practice with real partners worldwide.",
  },
];

const testimonials = [
  {
    name: "Farhan Ahmed",
    role: "Software Engineer, Dhaka",
    avatar: "FA",
    quote:
      "EnglishOra helped me ace my job interview in just 3 months. The AI speaking coach is a game-changer!",
    stars: 5,
  },
  {
    name: "Nusrat Jahan",
    role: "University Student, Chittagong",
    avatar: "NJ",
    quote:
      "I was scared to speak English. Now I lead group discussions confidently. Highly recommend EnglishOra!",
    stars: 5,
  },
  {
    name: "Rakib Hossain",
    role: "Business Owner, Sylhet",
    avatar: "RH",
    quote:
      "The live tutor sessions are worth every taka. My business communication improved dramatically.",
    stars: 5,
  },
];

const plans = [
  {
    name: "Free",
    price: "৳0",
    period: "/month",
    highlight: false,
    features: [
      "5 lessons per week",
      "Basic vocabulary builder",
      "Community forum access",
      "Progress tracking",
    ],
    cta: "Get Started Free",
  },
  {
    name: "Pro",
    price: "৳499",
    period: "/month",
    highlight: true,
    features: [
      "Unlimited lessons",
      "AI Speaking Coach (unlimited)",
      "Smart adaptive quizzes",
      "Offline downloads",
      "Priority support",
    ],
    cta: "Start Pro Trial",
  },
  {
    name: "Premium",
    price: "৳999",
    period: "/month",
    highlight: false,
    features: [
      "Everything in Pro",
      "4 live tutor sessions/month",
      "IELTS / TOEFL prep track",
      "Certificate of completion",
      "Dedicated success coach",
    ],
    cta: "Go Premium",
  },
];

const stats = [
  { value: "50K+", label: "Active Learners" },
  { value: "200+", label: "Expert Tutors" },
  { value: "1,200+", label: "Lessons & Exercises" },
  { value: "4.9★", label: "Average Rating" },
];

/* ──────────────────────────────────────────────
   COMPONENTS
────────────────────────────────────────────── */

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🇬🇧</span>
          <span className="text-xl font-bold text-indigo-700 tracking-tight">
            English<span className="text-emerald-500">Ora</span>
          </span>
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <Link href="#features" className="hover:text-indigo-600 transition-colors">Features</Link>
          <Link href="#testimonials" className="hover:text-indigo-600 transition-colors">Reviews</Link>
          <Link href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing</Link>
        </nav>

        {/* CTAs */}
        <div className="flex items-center gap-3">
          <Link
            href="#"
            className="hidden sm:inline text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
          >
            Log In
          </Link>
          <Link
            href="#"
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
          >
            Start for Free
          </Link>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-24 px-6 bg-gradient-to-br from-indigo-50 via-white to-emerald-50 text-center relative overflow-hidden">
      {/* Decorative blobs */}
      <div
        aria-hidden
        className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-200 rounded-full opacity-30 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-200 rounded-full opacity-30 blur-3xl pointer-events-none"
      />

      <div className="relative max-w-4xl mx-auto">
        <span className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
          🚀 AI-Powered English Learning
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
          Master English with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-500">
            Confidence
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          EnglishOra combines AI coaching, gamified lessons, and live tutors to
          help you speak, write, and think in English — from Beginner to Fluent.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base px-8 py-4 rounded-full shadow-lg shadow-indigo-200 transition-all hover:scale-105"
          >
            Start Learning for Free →
          </Link>
          <Link
            href="#features"
            className="bg-white hover:bg-slate-50 text-slate-700 font-semibold text-base px-8 py-4 rounded-full border border-slate-200 transition-all"
          >
            See How It Works
          </Link>
        </div>

        <p className="mt-6 text-sm text-slate-400">
          No credit card required · Free forever plan available
        </p>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="bg-indigo-700 py-14 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="text-3xl sm:text-4xl font-extrabold">{s.value}</p>
            <p className="mt-1 text-indigo-200 text-sm font-medium">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Everything You Need to Learn English
          </h2>
          <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
            All the tools, lessons, and support — in one beautifully designed platform.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="group p-6 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-50 transition-all bg-white"
            >
              <span className="text-4xl mb-4 block">{f.icon}</span>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Take a Placement Test",
      desc: "A quick 5-minute quiz finds your current level so your path is perfectly tailored.",
    },
    {
      step: "02",
      title: "Follow Your Path",
      desc: "Complete daily lessons, speaking exercises, and quizzes — all in 15 minutes a day.",
    },
    {
      step: "03",
      title: "Practice with AI & Tutors",
      desc: "Get real-time feedback from our AI coach or book a live session with a human tutor.",
    },
    {
      step: "04",
      title: "Track & Celebrate",
      desc: "Watch your fluency score rise and earn certificates you can share with the world.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            How EnglishOra Works
          </h2>
          <p className="mt-4 text-slate-500 text-lg">Simple steps. Real results.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {steps.map((s) => (
            <div key={s.step} className="flex gap-5 items-start">
              <span className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-600 text-white font-extrabold text-sm flex items-center justify-center shadow-md shadow-indigo-200">
                {s.step}
              </span>
              <div>
                <h3 className="font-bold text-slate-800 text-lg">{s.title}</h3>
                <p className="text-slate-500 text-sm mt-1 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Loved by Thousands of Learners
          </h2>
          <p className="mt-4 text-slate-500 text-lg">
            Real stories from people who transformed their English skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col gap-4"
            >
              <div className="flex text-amber-400 text-sm gap-0.5">
                {"★".repeat(t.stars)}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-slate-800 text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-slate-500 text-lg">
            Start free. Upgrade when you&apos;re ready.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 flex flex-col gap-6 ${
                plan.highlight
                  ? "bg-indigo-700 text-white shadow-2xl shadow-indigo-200 scale-105 relative"
                  : "bg-white border border-slate-200"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-400 text-emerald-900 text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <div>
                <p
                  className={`text-sm font-semibold uppercase tracking-widest mb-2 ${
                    plan.highlight ? "text-indigo-200" : "text-indigo-600"
                  }`}
                >
                  {plan.name}
                </p>
                <p className={`text-4xl font-extrabold ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                  {plan.price}
                  <span className={`text-base font-medium ${plan.highlight ? "text-indigo-200" : "text-slate-400"}`}>
                    {plan.period}
                  </span>
                </p>
              </div>

              <ul className="flex flex-col gap-3 text-sm flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className={`flex-shrink-0 mt-0.5 ${plan.highlight ? "text-emerald-300" : "text-emerald-500"}`}>
                      ✓
                    </span>
                    <span className={plan.highlight ? "text-indigo-100" : "text-slate-600"}>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#"
                className={`text-center font-bold py-3 rounded-full transition-all ${
                  plan.highlight
                    ? "bg-white text-indigo-700 hover:bg-indigo-50"
                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 px-6 bg-indigo-700 text-white text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          Ready to Speak English with Confidence?
        </h2>
        <p className="text-indigo-200 text-lg mb-10 leading-relaxed">
          Join 50,000+ learners who are improving their English every day with EnglishOra.
          Start your journey — completely free.
        </p>
        <Link
          href="#"
          className="inline-block bg-white text-indigo-700 font-extrabold text-lg px-10 py-4 rounded-full shadow-xl hover:scale-105 hover:bg-indigo-50 transition-all"
        >
          Join EnglishOra for Free →
        </Link>
        <p className="mt-5 text-indigo-300 text-sm">
          No credit card · Cancel anytime · Free plan always available
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-white">
          <span className="text-2xl">🇬🇧</span>
          <span className="text-xl font-bold tracking-tight">
            English<span className="text-emerald-400">Ora</span>
          </span>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 text-sm">
          {["About", "Features", "Pricing", "Blog", "Contact", "Privacy Policy"].map((item) => (
            <Link key={item} href="#" className="hover:text-white transition-colors">
              {item}
            </Link>
          ))}
        </nav>

        <p className="text-sm">© 2026 EnglishOra. All rights reserved.</p>
      </div>
    </footer>
  );
}

/* ──────────────────────────────────────────────
   PAGE
────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
