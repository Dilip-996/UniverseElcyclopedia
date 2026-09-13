import { PageHero } from "@/components/PageHero";
import { QuizEngine } from "@/components/QuizEngine";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta(
  "Quiz",
  "Ten friendly space questions with explanations. Earn a cosmic rank after you have read the encyclopedia.",
);

export default function QuizPage() {
  return (
    <>
      <PageHero
        eyebrow="Test what you learned"
        title="Earn your cosmic rank"
        subtitle="An optional quiz after you have read the encyclopedia. Ten questions, friendly explanations, and a rank at the finish."
      />
      <section className="page-x pb-20">
        <QuizEngine />
      </section>
    </>
  );
}
