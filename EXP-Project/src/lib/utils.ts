export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatWeight(earthKg: number, gravity: number) {
  const value = earthKg * gravity;
  return Number.isInteger(value) ? String(value) : value.toFixed(1);
}
