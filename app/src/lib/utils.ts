import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { startOfWeek, endOfWeek, format, parseISO } from "date-fns";

/**
 * Combines class names with Tailwind CSS merge support
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a number as currency
 */
export function formatCurrency(
  amount: number,
  currency: string = "USD",
  locale: string = "en-US"
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amount);
}

/**
 * Formats a number as a percentage
 */
export function formatPercentage(value: number, decimals: number = 1): string {
  return `${value.toFixed(decimals)}%`;
}

/**
 * Gets the start of the current week (Monday)
 */
export function getWeekStart(date: Date = new Date()): Date {
  return startOfWeek(date, { weekStartsOn: 1 }); // Monday
}

/**
 * Gets the end of the current week (Sunday)
 */
export function getWeekEnd(date: Date = new Date()): Date {
  return endOfWeek(date, { weekStartsOn: 1 }); // Sunday
}

/**
 * Formats a date range for display
 */
export function formatWeekRange(startDate: Date, endDate: Date): string {
  const startStr = format(startDate, "MMM d");
  const endStr = format(endDate, "MMM d, yyyy");
  return `${startStr} - ${endStr}`;
}

/**
 * Calculates percentage of a value against a total
 */
export function calculatePercentage(value: number, total: number): number {
  if (total === 0) return 0;
  return (value / total) * 100;
}

/**
 * Determines if a cost percentage is over target
 */
export function isOverTarget(actual: number, target: number): boolean {
  return actual > target;
}

/**
 * Parses a date string safely
 */
export function safeParseDate(dateString: string): Date | null {
  try {
    return parseISO(dateString);
  } catch {
    return null;
  }
}
