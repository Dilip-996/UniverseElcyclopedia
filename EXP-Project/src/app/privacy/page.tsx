import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta(
  "Privacy",
  "How Cosmic Kids handles privacy for young readers. This site does not collect accounts, cookies, or personal information.",
);

export default function PrivacyPage() {
  return (
    <article className="page-x pb-20 pt-12">
      <div className="mx-auto max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-aurora">For families and classrooms</p>
        <h1 className="mt-3 font-display text-4xl text-white sm:text-5xl">Privacy</h1>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-slate-300">
          <p>
            Cosmic Kids is a reading site. It does not ask for names, emails, or accounts, and it does not use
            advertising or analytics cookies.
          </p>
          <p>
            Search, quizzes, and the planet weight calculator stay in your browser. Nothing you type is sent to a
            server or saved after you leave the page.
          </p>
          <p>
            This encyclopedia is written for readers ages 8 to 14. Parents and teachers can use it without creating a
            profile.
          </p>
        </div>
      </div>
    </article>
  );
}
