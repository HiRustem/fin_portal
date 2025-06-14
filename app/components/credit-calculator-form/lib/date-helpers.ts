export function getCreditStartDate(date: Date): string {
  return date.toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
}

export function isValidDate(date: Date | undefined) {
  if (!date) {
    return false;
  }
  return !isNaN(date.getTime());
}

export function convertDateDDMMYYYYtoISO(dateStr: string): string {
  const [day, month, year] = dateStr.split('.');
  return `${year}-${month}-${day}`;
}
