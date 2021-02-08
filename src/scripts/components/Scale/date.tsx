export function dateGetSeconds(newDate: Date): string {
  return newDate.getSeconds() < 10
    ? `0${newDate.getSeconds()}`
    : `${newDate.getSeconds()}`;
}
export function dateGetMinutes(newDate: Date): string {
  return newDate.getMinutes() < 10
    ? `0${newDate.getMinutes()}`
    : `${newDate.getMinutes()}`;
}

export function dateGetHours(newDate: Date): string {
  return newDate.getHours() < 10
    ? `0${newDate.getHours()}`
    : `${newDate.getHours()}`;
}

export function dateGetDate(newDate: Date): number {
  return newDate.getDate();
}
export function dateGetMonth(newDate: Date): string {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apl',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  return months[newDate.getMonth()];
}
export function dateGetYear(newDate: Date): number {
  return newDate.getFullYear();
}
