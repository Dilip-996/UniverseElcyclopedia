import { redirect } from "next/navigation";
import { getRandomSlug } from "@/data/encyclopedia";

export default function RandomArticlePage() {
  redirect(`/encyclopedia/${getRandomSlug()}`);
}
