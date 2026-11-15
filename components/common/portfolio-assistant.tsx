"use client";

import { Bot, Loader2, MessageCircle, Send, Sparkles, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const suggestions = [
  "What does Ahmed build?",
  "What are his strongest skills?",
  "Is he available for freelance work?",
  "How can I contact him?",
];

const welcomeMessage: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "Hi! I’m Ahmed’s portfolio assistant. Ask me about his skills, projects, experience, availability, or how to get in touch.",
};

function safeHref(value: string) {
  return /^(https?:\/\/|mailto:|tel:)/i.test(value) ? value : null;
}

function splitTrailingPunctuation(value: string) {
  let url = value;
  let trailing = "";

  while (/[.,!?;:]$/.test(url)) {
    trailing = `${url.slice(-1)}${trailing}`;
    url = url.slice(0, -1);
  }

  return { url, trailing };
}

function renderLink(label: string, href: string, key: string) {
  const safeUrl = safeHref(href);
  if (!safeUrl) return label;

  return (
    <a
      key={key}
      href={safeUrl}
      target={/^https?:\/\//i.test(safeUrl) ? "_blank" : undefined}
      rel={/^https?:\/\//i.test(safeUrl) ? "noreferrer" : undefined}
      className="font-medium text-foreground underline decoration-foreground/30 underline-offset-2 transition-colors hover:decoration-foreground"
    >
      {label}
    </a>
  );
}

function renderInlineMarkdown(text: string, keyPrefix: string): ReactNode[] {
  const tokenPattern = /(\*\*.+?\*\*|__.+?__|\[[^\]]+\]\((?:https?:\/\/|mailto:|tel:)[^)]+\)|https?:\/\/[^\s<]+|mailto:[^\s<]+|tel:[^\s<]+|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}|\+\d[\d ()-]{6,}\d)/gi;
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let tokenIndex = 0;

  while ((match = tokenPattern.exec(text)) !== null) {
    if (match.index > lastIndex) nodes.push(text.slice(lastIndex, match.index));

    const token = match[0];
    const key = `${keyPrefix}-${tokenIndex}`;
    tokenIndex += 1;

    if (token.startsWith("**") && token.endsWith("**")) {
      nodes.push(<strong key={key}>{token.slice(2, -2)}</strong>);
    } else if (token.startsWith("__") && token.endsWith("__")) {
      nodes.push(<strong key={key}>{token.slice(2, -2)}</strong>);
    } else {
      const markdownLink = token.match(/^\[([^\]]+)\]\(((?:https?:\/\/|mailto:|tel:)[^)]+)\)$/i);

      if (markdownLink) {
        nodes.push(renderLink(markdownLink[1], markdownLink[2], key));
      } else {
        const { url, trailing } = splitTrailingPunctuation(token);
        const href = token.includes("@") && !/^(https?:\/\/|mailto:|tel:)/i.test(url)
          ? `mailto:${url}`
          : /^\+\d[\d ()-]{6,}\d$/.test(url)
            ? `tel:${url.replace(/[^\d+]/g, "")}`
            : url;
        nodes.push(renderLink(token.slice(0, token.length - trailing.length), href, key));
        if (trailing) nodes.push(trailing);
      }
    }

    lastIndex = match.index + token.length;
  }

  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
}

function AssistantMessageContent({ content }: { content: string }) {
  const normalizedContent = content
    .replace(/\\([*_])/g, "$1")
    .replace(/https\\:\/\//g, "https://")
    .replace(/(^|\s)\*\*(?=\s|$)/g, "$1");
  const lines = normalizedContent.replace(/\r\n/g, "\n").split("\n");
  const blocks: ReactNode[] = [];
  const listItems: string[] = [];
  let collectingList = false;

  const flushList = () => {
    if (!listItems.length) return;

    const items = [...listItems];
    blocks.push(
      <ul key={`list-${blocks.length}`} className="ml-4 list-disc space-y-1.5">
        {items.map((item, index) => (
          <li key={`item-${index}`}>
            {item.split("\n").map((line, lineIndex) => (
              <span key={`line-${lineIndex}`}>
                {lineIndex > 0 ? <br /> : null}
                {renderInlineMarkdown(line, `item-${index}-${lineIndex}`)}
              </span>
            ))}
          </li>
        ))}
      </ul>,
    );
    listItems.length = 0;
    collectingList = false;
  };

  lines.forEach((line, index) => {
    const trimmedLine = line.trim();
    const listMatch = trimmedLine.match(/^(?:[-*+]|\d+[.)])\s+(.+)$/);

    if (listMatch) {
      listItems.push(listMatch[1]);
      collectingList = true;
      return;
    }

    if (collectingList && trimmedLine) {
      listItems[listItems.length - 1] = `${listItems[listItems.length - 1]}\n${trimmedLine}`;
      return;
    }

    flushList();
    if (trimmedLine) {
      blocks.push(<p key={`paragraph-${index}`}>{renderInlineMarkdown(trimmedLine, `paragraph-${index}`)}</p>);
    }
  });

  flushList();
  return <div className="space-y-2">{blocks}</div>;
}

export function PortfolioAssistant() {
  const prefersReducedMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([welcomeMessage]);
  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);
    if (window.matchMedia("(min-width: 640px)").matches) {
      requestAnimationFrame(() => inputRef.current?.focus());
    }

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [messages, isLoading]);

  const sendMessage = async (value = input) => {
    const content = value.trim();
    if (!content || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content,
    };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages
            .filter((message) => message.id !== "welcome")
            .map(({ role, content: messageContent }) => ({ role, content: messageContent })),
        }),
      });
      const data = (await response.json()) as { message?: string; error?: string };
      if (!response.ok || !data.message) throw new Error(data.error || "The assistant could not answer.");

      setMessages((current) => [
        ...current,
        { id: `assistant-${Date.now()}`, role: "assistant", content: data.message as string },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          id: `assistant-error-${Date.now()}`,
          role: "assistant",
          content: "I couldn’t answer that right now. Try again, or use the contact page to reach Ahmed directly.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {open ? (
        <button
          type="button"
          aria-label="Close portfolio assistant"
          className="fixed inset-0 z-[68] bg-foreground/10 backdrop-blur-[2px] sm:hidden"
          onClick={() => setOpen(false)}
        />
      ) : null}
    <div
      ref={panelRef}
      className={cn(
        "fixed z-[70]",
        open
          ? "inset-x-0 bottom-0 sm:inset-x-auto sm:bottom-[calc(1.25rem+env(safe-area-inset-bottom))] sm:right-6"
          : "bottom-[calc(1.25rem+env(safe-area-inset-bottom))] right-4 sm:right-6",
      )}
    >
      {open ? (
        <motion.section
          role="dialog"
          aria-modal="true"
          aria-label="Ask about Ahmed"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex h-[min(80dvh,640px)] w-full origin-bottom flex-col overflow-hidden rounded-t-[28px] border border-b-0 border-border/80 bg-background/95 shadow-[0_-20px_60px_-30px_hsl(var(--foreground)/0.55)] backdrop-blur-xl sm:mb-4 sm:h-auto sm:w-[min(390px,calc(100vw-2rem))] sm:origin-bottom-right sm:rounded-3xl sm:border-b sm:shadow-2xl sm:shadow-foreground/15"
        >
          <div className="relative flex shrink-0 items-start justify-between gap-3 border-b border-border/70 bg-muted/45 px-4 pb-3.5 pt-5 sm:px-5 sm:py-4">
            <span className="absolute left-1/2 top-2 h-1 w-10 -translate-x-1/2 rounded-full bg-border sm:hidden" aria-hidden="true" />
            <div className="flex min-w-0 items-center gap-3">
              <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-foreground text-background shadow-sm sm:size-10 sm:rounded-2xl">
                <Sparkles className="size-4" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="font-heading text-lg font-semibold tracking-tight">Ask about Ahmed</p>
                <p className="mt-0.5 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden="true" /> Portfolio assistant
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close portfolio assistant"
              className="grid size-9 shrink-0 place-items-center rounded-full bg-background/60 text-muted-foreground transition-colors hover:bg-background hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          </div>

          <div className="min-h-0 flex-1 space-y-3 overflow-y-auto overscroll-contain bg-background/75 px-4 py-4 sm:max-h-[min(430px,calc(100dvh-18rem))] sm:min-h-48 sm:flex-none sm:bg-transparent sm:px-4" aria-live="polite">
            {messages.map((message) => (
              <div key={message.id} className={cn("flex gap-2.5", message.role === "user" && "justify-end")}>
                {message.role === "assistant" ? (
                  <span className="mt-1 grid size-7 shrink-0 place-items-center rounded-full bg-muted text-muted-foreground">
                    <Bot className="size-3.5" aria-hidden="true" />
                  </span>
                ) : null}
                <div
                  className={cn(
                    "max-w-[88%] break-words rounded-2xl border px-3.5 py-2.5 text-sm leading-6 shadow-sm",
                    message.role === "assistant"
                      ? "rounded-tl-md border-border/60 bg-muted/80 text-foreground"
                      : "rounded-tr-md border-foreground bg-foreground text-background shadow-foreground/10",
                  )}
                >
                  {message.role === "assistant" ? (
                    <AssistantMessageContent content={message.content} />
                  ) : (
                    <span className="whitespace-pre-wrap">{message.content}</span>
                  )}
                </div>
              </div>
            ))}
            {isLoading ? (
              <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
                <span className="grid size-7 place-items-center rounded-full bg-muted"><Bot className="size-3.5" aria-hidden="true" /></span>
                <span className="inline-flex items-center gap-1.5 rounded-2xl rounded-tl-md border border-border/60 bg-muted/80 px-3.5 py-2.5 shadow-sm">
                  Thinking <Loader2 className="size-3.5 animate-spin" aria-hidden="true" />
                </span>
              </div>
            ) : null}
            <div ref={bottomRef} />
          </div>

          {messages.length === 1 ? (
            <div className="flex shrink-0 gap-2 overflow-x-auto border-t border-border/60 bg-background/90 px-4 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:flex-wrap sm:overflow-visible sm:px-4">
              {suggestions.map((suggestion) => (
                <button
                  type="button"
                  key={suggestion}
                  onClick={() => sendMessage(suggestion)}
                  className="shrink-0 rounded-full border border-border bg-background px-3 py-2 text-left text-xs text-muted-foreground transition-colors hover:border-foreground/30 hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          ) : null}

          <form
            className="flex shrink-0 items-center gap-2 border-t border-border/70 bg-background/95 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] sm:bg-transparent sm:p-4"
            onSubmit={(event) => {
              event.preventDefault();
              void sendMessage();
            }}
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask a quick question..."
              aria-label="Ask about Ahmed"
              maxLength={1200}
              className="h-11 min-w-0 flex-1 rounded-full border border-border bg-muted/35 px-4 text-base outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground/40 focus:bg-background focus:ring-2 focus:ring-ring/30 sm:text-sm"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              aria-label="Send question"
              className="grid size-11 shrink-0 place-items-center rounded-full bg-foreground text-background transition-transform hover:scale-105 disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Send className="size-4" aria-hidden="true" />
            </button>
          </form>
        </motion.section>
      ) : null}

      {!open ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Ask about Ahmed"
          title="Ask about Ahmed"
          className="group flex size-12 items-center justify-center rounded-full border border-foreground/10 bg-foreground text-sm font-medium text-background shadow-xl shadow-foreground/20 transition-all hover:-translate-y-1 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:h-14 sm:w-auto sm:justify-start sm:gap-2 sm:px-5"
        >
          <span className="grid size-8 place-items-center rounded-full bg-background/15">
            <MessageCircle className="size-4 transition-transform group-hover:rotate-[-8deg]" aria-hidden="true" />
          </span>
          <span className="hidden sm:inline">Ask about Ahmed</span>
        </button>
      ) : null}
    </div>
    </>
  );
}
