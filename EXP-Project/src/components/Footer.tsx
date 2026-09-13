import Link from "next/link";
import { navLinks, secondaryNavLinks } from "@/data/adventures";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-black/30 sm:mt-24">
      <div className="mx-auto grid max-w-7xl gap-10 page-x py-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="font-display text-3xl text-white">A visual encyclopedia of the universe.</p>
          <p className="mt-3 max-w-md leading-relaxed text-slate-300">
            Cosmic Kids is a reference library for curious readers ages 8 to 14. Read an article, follow
            related topics, and keep exploring.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-2.5">
          {[...navLinks, ...secondaryNavLinks, { href: "/privacy", label: "Privacy" }].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-white/10 px-3 py-2 text-sm font-semibold text-slate-200 hover:bg-white/10"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <p className="border-t border-white/5 px-4 py-4 text-center text-xs text-slate-500">
        Written for classroom curiosity. Numbers are rounded when that helps a reader understand scale. No accounts or
        tracking cookies.
      </p>
    </footer>
  );
}
