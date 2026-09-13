export function getSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (raw && /^https?:\/\//i.test(raw)) return raw;
  return "http://localhost:3000";
}
