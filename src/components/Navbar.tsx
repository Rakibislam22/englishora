"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Features",     href: "/#features" },
  { label: "Reviews",      href: "/#testimonials" },
  { label: "Pricing",      href: "/#pricing" },
  { label: "About",        href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();

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
          {navLinks.map(({ label, href }) => {
            const isActive =
              href === "/about"
                ? pathname === "/about"
                : pathname === "/" && href.startsWith("/#");

            return (
              <Link
                key={label}
                href={href}
                className={`transition-colors hover:text-indigo-600 ${
                  isActive ? "text-indigo-600 font-semibold" : ""
                }`}
              >
                {label}
              </Link>
            );
          })}
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

