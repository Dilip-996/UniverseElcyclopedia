"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="page-x py-20">
      <div className="mx-auto max-w-xl">
        <h1 className="font-display text-4xl text-white">Something went off course</h1>
        <p className="mt-4 text-slate-300">That page hit a snag. You can try again or head back to the encyclopedia.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button type="button" onClick={() => retry()} className="btn btn-primary">
            Try again
          </button>
          <Link href="/encyclopedia" className="btn btn-ghost">
            Back to the encyclopedia
          </Link>
        </div>
      </div>
    </section>
  );
}
