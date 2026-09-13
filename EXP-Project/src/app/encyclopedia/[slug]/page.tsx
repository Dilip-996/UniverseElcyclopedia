import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { encyclopediaEntries, getEntry } from "@/data/encyclopedia";
import { EncyclopediaArticle } from "@/components/encyclopedia/EncyclopediaArticle";

export function generateStaticParams() {
  return encyclopediaEntries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntry(slug);
  if (!entry) return { title: "Topic not found" };
  return {
    title: `${entry.title} — Cosmic Kids Encyclopedia`,
    description: entry.shortDescription,
  };
}

export default async function EncyclopediaTopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getEntry(slug);
  if (!entry) notFound();
  return <EncyclopediaArticle entry={entry} />;
}
