import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * 📅 Formats a date into a readable string format (e.g., "August 13, 2025").
 * @param {Date | string} date - The date to format.
 * @returns {string} - The formatted date string.
 */
export function formatDate(
  date: Date | string | null | undefined,
  options?: Intl.DateTimeFormatOptions
): string {
  // 🔄 Handle null, undefined, or empty dates
  if (!date || date === "") {
    return "";
  }

  const dateObj = typeof date === "string" ? new Date(date) : date;

  // 🔄 Check if date is valid
  if (isNaN(dateObj.getTime())) {
    return "";
  }

  return dateObj.toLocaleDateString(
    "en-US",
    options || {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );
}
