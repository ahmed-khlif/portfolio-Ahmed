"use client";

import { Check, Share2 } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function ShareProfileButton() {
  const [shared, setShared] = useState(false);

  async function shareProfile() {
    const shareData = {
      title: `${siteConfig.authorName} — ${siteConfig.role}`,
      text: `Explore ${siteConfig.authorName}'s work in full-stack engineering, applied AI and developer tooling.`,
      url: window.location.origin,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
      }
      setShared(true);
      window.setTimeout(() => setShared(false), 2200);
    } catch {
      setShared(false);
    }
  }

  return (
    <Button type="button" variant="outline" onClick={shareProfile} className="h-11 rounded-none">
      {shared ? <Check data-icon="inline-start" /> : <Share2 data-icon="inline-start" />}
      {shared ? "Profile link copied" : "Share profile"}
    </Button>
  );
}
