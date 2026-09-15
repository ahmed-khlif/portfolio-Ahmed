import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function formatDateFromObj(input: Date): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

/**
 * Formats a role period as "Jan 2026 – Jun 2026" (or "May 2023 – Present").
 * Month-level precision matters: short internships inside a single year would
 * otherwise render as "2026 - 2026".
 */
export function formatDuration(
  startDate: Date | string,
  endDate: Date | string | "Present"
): string {
  const format = (value: Date | string | "Present") =>
    value === "Present"
      ? "Present"
      : new Date(value).toLocaleDateString("en-US", {
          month: "short",
          year: "numeric",
        });

  return `${format(startDate)} – ${format(endDate)}`;
}
