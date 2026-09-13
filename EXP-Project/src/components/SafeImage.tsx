"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

export function SafeImage({ src, alt, className }: Props) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (failed) {
    return (
      <div className={cn("grid place-items-center bg-white/5 text-slate-400", className)} role="img" aria-label={alt}>
        Image unavailable
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden bg-white/5", className)}>
      {!loaded ? <div className="absolute inset-0 animate-pulse bg-white/10" /> : null}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
        className={cn("h-full w-full object-cover transition-opacity", loaded ? "opacity-100" : "opacity-0")}
      />
    </div>
  );
}
