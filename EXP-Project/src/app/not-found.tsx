import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="page-x py-20">
      <div className="mx-auto max-w-xl">
        <h1 className="font-display text-4xl text-white">Page not found</h1>
        <p className="mt-4 text-slate-300">That address is not on this star map. Try the encyclopedia instead.</p>
        <Link href="/encyclopedia" className="btn btn-primary mt-6">
          Back to the encyclopedia
        </Link>
      </div>
    </section>
  );
}
