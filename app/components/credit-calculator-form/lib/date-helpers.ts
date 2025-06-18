export const dateStringRegex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(\d{4})$/;

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

export function isValidDateString(dateString: string): boolean {
  if (!dateStringRegex.test(dateString)) {
    return false;
  }

  return true;
}
