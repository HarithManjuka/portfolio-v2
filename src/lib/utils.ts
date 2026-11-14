
/**
 * Combines conditional CSS class names.
 * Accepts strings, false, null, and undefined.
 */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}
