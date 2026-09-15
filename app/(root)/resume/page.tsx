import { redirect } from "next/navigation";

import { siteConfig } from "@/config/site";

/**
 * /resume redirects to the CV. `NEXT_PUBLIC_RESUME_LINK` stays supported so
 * the CV can be swapped (Drive, Notion, an external host) without a deploy.
 */
export default function ResumePage() {
  redirect(process.env.NEXT_PUBLIC_RESUME_LINK || siteConfig.resume);
}
