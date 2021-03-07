import {IWeather} from './types';

export function getLocalDate(timezone: number, date: Date): Date {
  const utc = date.getTime() + date.getTimezoneOffset() * 60000;
  return new Date(utc + 1000 * timezone);
}

export function setBg(weather: IWeather): string {
  if (weather.cod === 0 || weather.cod === 404) {
    return 'app app-day-clear';
  }

  const {id} = weather.weather[0];

  function setNightMode() {
    const d = new Date();
    const time = getLocalDate(weather.timezone, d);

    return time.getHours() <= 6 || time.getHours() >= 18;
  }

  switch (true) {
    case id >= 200 && id < 700:
      if (setNightMode()) {
        return 'app app-night-cloud';
      }
      return 'app app-day-rain';

    case id >= 700 && id < 800:
      if (id < 730) {
        if (setNightMode()) {
          return 'app app-night-cloud';
        }
        return 'app app-rain';
      }
      return 'app app-atmosphere';
    case id === 800:
      if (setNightMode()) {
        return 'app app-night-clear';
      }
      return 'app app-day-clear';
    case id > 800:
      if (setNightMode()) {
        return 'app app-night-cloud';
      }
      return 'app app-day-cloud';
    default:
      return 'app app-day-clear';
  }
}
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
  return newDate.getHours() < 10 ? `0${newDate.getHours()}` : `${newDate.getHours()}`;
}

export function dateGetDate(newDate: Date): number {
  return newDate.getDate();
}
export function dateGetDay(newDate: Date): string {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return days[newDate.getDay()];
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
