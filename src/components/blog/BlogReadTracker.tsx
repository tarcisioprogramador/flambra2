"use client";

import { useEffect } from "react";
import { ANALYTICS } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";

/** Dispara evento blog_read ao abrir um artigo (uma vez por página). */
export function BlogReadTracker({ slug }: { slug: string }) {
  useEffect(() => {
    trackEvent(ANALYTICS.events.blogRead, { post_slug: slug });
  }, [slug]);

  return null;
}
