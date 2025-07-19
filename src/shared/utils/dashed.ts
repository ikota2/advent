export function dashed(string: string): string {
  return string.toLowerCase().replace(/[: ]/g, '-').replace(/--+/g, '-');
}
