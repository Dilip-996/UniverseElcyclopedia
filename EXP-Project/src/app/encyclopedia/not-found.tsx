import Link from "next/link";

export default function EncyclopediaNotFound() {
  return (
    <section className="page-x py-20">
      <div className="mx-auto max-w-xl">
        <h1 className="font-display text-4xl text-white">Topic not found</h1>
        <p className="mt-4 text-slate-300">That article is not in the encyclopedia yet.</p>
        <Link href="/encyclopedia" className="btn btn-primary mt-6">
          Back to the encyclopedia
        </Link>
      </div>
    </section>
  );
}
