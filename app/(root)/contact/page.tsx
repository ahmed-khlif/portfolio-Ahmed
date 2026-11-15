import { Metadata } from "next";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { LocalizedText } from "@/components/common/localized-text";
import PageContainer from "@/components/common/page-container";
import { ContactForm } from "@/components/forms/contact-form";
import { buttonVariants } from "@/components/ui/button";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: pagesConfig.contact.metadata.title,
  description: pagesConfig.contact.metadata.description,
};

const channels = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Icons.gmail,
  },
  {
    label: "Phone",
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
    icon: Icons.contact,
  },
  {
    label: "WhatsApp",
    value: "Message me directly",
    href: siteConfig.whatsapp,
    icon: Icons.whatsapp,
  },
  {
    label: "LinkedIn",
    value: "in/ahmed-khlif",
    href: siteConfig.links.linkedin,
    icon: Icons.linkedin,
  },
  {
    label: "GitHub",
    value: "@ahmed-khlif",
    href: siteConfig.links.github,
    icon: Icons.gitHub,
  },
];

export default function ContactPage() {
  return (
    <PageContainer
      translationKey="contact"
      title={pagesConfig.contact.title}
      description={pagesConfig.contact.description}
    >
      <div className="grid gap-12 py-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-20">
        <div className="max-w-2xl">
          <ContactForm />
        </div>

        <aside className="flex flex-col gap-8 border-t border-border pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              <LocalizedText id="contact.directChannels" fallback="Direct channels" />
            </p>
            <ul className="mt-4 space-y-1">
              {channels.map((channel) => {
                const ChannelIcon = channel.icon;
                return (
                  <li key={channel.label}>
                    <Link
                      href={channel.href}
                      target={channel.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="group flex items-start gap-3 rounded-lg px-2 py-2.5 transition-colors hover:bg-muted/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <ChannelIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
                      <span className="min-w-0">
                        <span className="block text-xs uppercase tracking-[0.14em] text-muted-foreground">
                          {channel.label}
                        </span>
                        <span className="block break-words text-sm text-foreground">
                          {channel.value}
                        </span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              <LocalizedText id="contact.openTo" fallback="Open to" />
            </p>
            <p className="mt-3 text-base leading-7">{siteConfig.availability}.</p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              <LocalizedText id="contact.responseTime" fallback="Response time" />
            </p>
            <p className="mt-3 text-muted-foreground">
              <LocalizedText id="contact.responseCopy" fallback={`Usually within two working days (${siteConfig.timezone}).`} />
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              <LocalizedText id="contact.basedIn" fallback="Based in" />
            </p>
            <p className="mt-3 text-muted-foreground">{siteConfig.location}</p>
          </div>

          <Link
            href="/projects"
            className={cn(buttonVariants({ variant: "outline" }), "w-fit rounded-none")}
          >
            <LocalizedText id="common.viewSelectedWork" fallback="View selected work" />
          </Link>
        </aside>
      </div>
    </PageContainer>
  );
}
