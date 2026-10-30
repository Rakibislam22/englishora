import Link from "next/link";

/* ──────────────────────────────────────────────
   DATA
────────────────────────────────────────────── */

const team = [
  {
    name: "Arif Rahman",
    role: "Founder & CEO",
    avatar: "AR",
    bio: "Former English teacher with 10+ years of experience. Passionate about making quality English education accessible to every Bangladeshi.",
    color: "bg-indigo-600",
  },
  {
    name: "Sumaya Akter",
    role: "Head of Curriculum",
    avatar: "SA",
    bio: "IELTS 8.5 scorer and Cambridge CELTA certified. Designs all lesson plans and learning pathways at EnglishOra.",
    color: "bg-emerald-600",
  },
  {
    name: "Tanvir Hossain",
    role: "Lead AI Engineer",
    avatar: "TH",
    bio: "NLP researcher with expertise in speech recognition. Built the AI Speaking Coach that powers EnglishOra.",
    color: "bg-violet-600",
  },
  {
    name: "Nadia Islam",
    role: "Head of Design",
    avatar: "NI",
    bio: "UX designer focused on making learning feel effortless. Believes great design is the silent teacher.",
    color: "bg-rose-500",
  },
];

const milestones = [
  { year: "2022", event: "EnglishOra founded with a vision to democratize English learning in Bangladesh." },
  { year: "2023", event: "Launched our first AI Speaking Coach, reaching 5,000 learners in 3 months." },
  { year: "2024", event: "Crossed 20,000 active users. Introduced live tutor sessions and IELTS prep track." },
  { year: "2025", event: "Hit 50,000 learners. Expanded to 200+ expert tutors across South Asia." },
  { year: "2026", event: "Launched EnglishOra 2.0 with fully personalized AI learning paths." },
];

const values = [
  {
    icon: "🎯",
    title: "Accessibility First",
    desc: "We believe every learner, regardless of background or budget, deserves world-class English education.",
  },
  {
    icon: "🤝",
    title: "Human + AI Together",
    desc: "Technology amplifies great teaching — it never replaces the human connection at the heart of learning.",
  },
  {
    icon: "📈",
    title: "Results-Driven",
    desc: "We measure success by your progress. Every feature we build is designed to make you more fluent, faster.",
  },
  {
    icon: "🌱",
    title: "Continuous Growth",
    desc: "Learning never stops — for our students or for us. We iterate, improve, and grow every single day.",
  },
];

/* ──────────────────────────────────────────────
   SHARED NAVBAR (same style as home)
────────────────────────────────────────────── */

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🇬🇧</span>
          <span className="text-xl font-bold text-indigo-700 tracking-tight">
            English<span className="text-emerald-500">Ora</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
          <Link href="/#features" className="hover:text-indigo-600 transition-colors">Features</Link>
          <Link href="/#pricing" className="hover:text-indigo-600 transition-colors">Pricing</Link>
          <Link href="/about" className="text-indigo-600 font-semibold">About</Link>
        </nav>

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

/* ──────────────────────────────────────────────
   SECTIONS
────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-indigo-50 via-white to-emerald-50 text-center relative overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-200 rounded-full opacity-30 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-200 rounded-full opacity-30 blur-3xl pointer-events-none"
      />

      <div className="relative max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
          🌟 Our Story
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
          We&apos;re on a Mission to Make{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-500">
            Every Bangladeshi
          </span>{" "}
          Fluent in English
        </h1>
        <p className="text-lg text-slate-500 leading-relaxed">
          EnglishOra was born from a simple belief — that language should never
          be a barrier to opportunity. We combine cutting-edge AI with passionate
          educators to make that belief a reality.
        </p>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-widest">Our Mission</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Breaking Down the Language Barrier — One Learner at a Time
          </h2>
          <p className="mt-5 text-slate-500 leading-relaxed">
            In Bangladesh, English proficiency is the difference between a good
            job and a great career, between being heard and being ignored. We
            started EnglishOra to change that.
          </p>
          <p className="mt-4 text-slate-500 leading-relaxed">
            Our platform blends structured curricula, gamified practice, AI
            coaching, and live human tutors into one seamless experience — so
            learners at any level can progress with confidence.
          </p>
          <Link
            href="/#features"
            className="mt-8 inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-full transition-all"
          >
            Explore Our Platform →
          </Link>
        </div>

        {/* Visual card */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { value: "50K+", label: "Active Learners", color: "bg-indigo-50 border-indigo-100" },
            { value: "200+", label: "Expert Tutors", color: "bg-emerald-50 border-emerald-100" },
            { value: "4.9★", label: "Avg. Rating", color: "bg-amber-50 border-amber-100" },
            { value: "2022", label: "Founded", color: "bg-violet-50 border-violet-100" },
          ].map((stat) => (
            <div
              key={stat.label}
              className={`${stat.color} border rounded-2xl p-6 flex flex-col items-center justify-center text-center`}
            >
              <p className="text-3xl font-extrabold text-slate-800">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-widest">What We Stand For</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">Our Core Values</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {values.map((v) => (
            <div
              key={v.title}
              className="flex gap-5 items-start p-6 bg-white rounded-2xl border border-slate-100 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-50 transition-all"
            >
              <span className="text-3xl flex-shrink-0">{v.icon}</span>
              <div>
                <h3 className="font-bold text-slate-800 text-lg">{v.title}</h3>
                <p className="mt-1 text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-widest">How We Got Here</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">Our Journey</h2>
        </div>

        <div className="relative border-l-2 border-indigo-100 pl-8 flex flex-col gap-10">
          {milestones.map((m, i) => (
            <div key={m.year} className="relative">
              {/* Dot */}
              <span className="absolute -left-[2.85rem] top-1 w-5 h-5 rounded-full bg-indigo-600 border-4 border-white shadow-md shadow-indigo-200 flex-shrink-0" />
              <span
                className={`text-xs font-extrabold uppercase tracking-widest ${
                  i === milestones.length - 1 ? "text-emerald-600" : "text-indigo-500"
                }`}
              >
                {m.year}
              </span>
              <p className="mt-1 text-slate-600 text-sm leading-relaxed">{m.event}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-widest">The People Behind It</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">Meet Our Team</h2>
          <p className="mt-4 text-slate-500 text-lg max-w-xl mx-auto">
            A passionate group of educators, engineers, and designers united by one goal.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white border border-slate-100 rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg hover:border-indigo-200 transition-all"
            >
              <div
                className={`w-16 h-16 rounded-full ${member.color} text-white flex items-center justify-center text-lg font-extrabold mb-4 shadow-md`}
              >
                {member.avatar}
              </div>
              <h3 className="font-bold text-slate-800">{member.name}</h3>
              <p className="text-indigo-600 text-xs font-semibold mt-1 mb-3">{member.role}</p>
              <p className="text-slate-500 text-xs leading-relaxed">{member.bio}</p>
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
          Join Our Growing Community
        </h2>
        <p className="text-indigo-200 text-lg mb-10 leading-relaxed">
          50,000+ learners trust EnglishOra to help them speak with confidence.
          Start your journey today — completely free.
        </p>
        <Link
          href="#"
          className="inline-block bg-white text-indigo-700 font-extrabold text-lg px-10 py-4 rounded-full shadow-xl hover:scale-105 hover:bg-indigo-50 transition-all"
        >
          Start Learning for Free →
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
          {[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Features", href: "/#features" },
            { label: "Pricing", href: "/#pricing" },
            { label: "Contact", href: "#" },
            { label: "Privacy Policy", href: "#" },
          ].map((item) => (
            <Link key={item.label} href={item.href} className="hover:text-white transition-colors">
              {item.label}
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

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Mission />
        <Values />
        <Timeline />
        <Team />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
        {/* Visual card */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { value: "50K+", label: "Active Learners", color: "bg-indigo-50 border-indigo-100" },
            { value: "200+", label: "Expert Tutors", color: "bg-emerald-50 border-emerald-100" },
            { value: "4.9★", label: "Avg. Rating", color: "bg-amber-50 border-amber-100" },
            { value: "2022", label: "Founded", color: "bg-violet-50 border-violet-100" },
          ].map((stat) => (
            <div
              key={stat.label}
              className={`${stat.color} border rounded-2xl p-6 flex flex-col items-center justify-center text-center`}
            >
              <p className="text-3xl font-extrabold text-slate-800">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-widest">What We Stand For</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">Our Core Values</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {values.map((v) => (
            <div
              key={v.title}
              className="flex gap-5 items-start p-6 bg-white rounded-2xl border border-slate-100 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-50 transition-all"
            >
              <span className="text-3xl flex-shrink-0">{v.icon}</span>
              <div>
                <h3 className="font-bold text-slate-800 text-lg">{v.title}</h3>
                <p className="mt-1 text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-widest">How We Got Here</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">Our Journey</h2>
        </div>

        <div className="relative border-l-2 border-indigo-100 pl-8 flex flex-col gap-10">
          {milestones.map((m, i) => (
            <div key={m.year} className="relative">
              {/* Dot */}
              <span className="absolute -left-[2.85rem] top-1 w-5 h-5 rounded-full bg-indigo-600 border-4 border-white shadow-md shadow-indigo-200 flex-shrink-0" />
              <span
                className={`text-xs font-extrabold uppercase tracking-widest ${
                  i === milestones.length - 1 ? "text-emerald-600" : "text-indigo-500"
                }`}
              >
                {m.year}
              </span>
              <p className="mt-1 text-slate-600 text-sm leading-relaxed">{m.event}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-widest">The People Behind It</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">Meet Our Team</h2>
          <p className="mt-4 text-slate-500 text-lg max-w-xl mx-auto">
            A passionate group of educators, engineers, and designers united by one goal.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white border border-slate-100 rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg hover:border-indigo-200 transition-all"
            >
              <div
                className={`w-16 h-16 rounded-full ${member.color} text-white flex items-center justify-center text-lg font-extrabold mb-4 shadow-md`}
              >
                {member.avatar}
              </div>
              <h3 className="font-bold text-slate-800">{member.name}</h3>
              <p className="text-indigo-600 text-xs font-semibold mt-1 mb-3">{member.role}</p>
              <p className="text-slate-500 text-xs leading-relaxed">{member.bio}</p>
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
          Join Our Growing Community
        </h2>
        <p className="text-indigo-200 text-lg mb-10 leading-relaxed">
          50,000+ learners trust EnglishOra to help them speak with confidence.
          Start your journey today — completely free.
        </p>
        <Link
          href="#"
          className="inline-block bg-white text-indigo-700 font-extrabold text-lg px-10 py-4 rounded-full shadow-xl hover:scale-105 hover:bg-indigo-50 transition-all"
        >
          Start Learning for Free →
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
          {[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Features", href: "/#features" },
            { label: "Pricing", href: "/#pricing" },
            { label: "Contact", href: "#" },
            { label: "Privacy Policy", href: "#" },
          ].map((item) => (
            <Link key={item.label} href={item.href} className="hover:text-white transition-colors">
              {item.label}
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

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Mission />
        <Values />
        <Timeline />
        <Team />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
