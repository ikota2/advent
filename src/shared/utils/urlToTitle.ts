export function urlToTitle(inputString: string): string | undefined {
  const parts = inputString.split('/');
  const lastPart = parts[parts.length - 1];

  const withoutDayPrefix = lastPart?.replace(/^day-\d+-/, '');
  const words = withoutDayPrefix?.split('-');
  const capitalizedWords = words?.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
  );

  return capitalizedWords?.join(' ');
}
