export function trimClassname(className: string): string {
  return className.replace(/\s\s+/g, ' ').trim();
}
