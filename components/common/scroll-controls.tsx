"use client";

import { useEffect, useState } from "react";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ScrollControls() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={cn("fixed bottom-28 right-5 z-40 flex translate-y-4 flex-col gap-2 opacity-0 transition-all duration-300 sm:bottom-28 sm:right-7", visible && "translate-y-0 opacity-100")}>
      <Button variant="outline" size="icon" className="size-11 rounded-full border-border/70 bg-background/90 shadow-xl shadow-foreground/10 backdrop-blur transition-colors hover:bg-foreground hover:text-background" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top" title="Back to top">
        <Icons.arrowUp className="size-4" />
      </Button>
      <Button variant="outline" size="icon" className="size-11 rounded-full border-border/70 bg-background/90 shadow-xl shadow-foreground/10 backdrop-blur transition-colors hover:bg-foreground hover:text-background" onClick={() => window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" })} aria-label="Scroll down" title="Scroll down">
        <Icons.arrowDown className="size-4" />
      </Button>
    </div>
  );
}
