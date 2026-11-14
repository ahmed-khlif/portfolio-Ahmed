import { redirect } from "next/navigation";

import { siteConfig } from "@/config/site";

/** Always serve the versioned CV committed in this portfolio repository. */
export default function ResumePage() {
  redirect(siteConfig.resume);
}
