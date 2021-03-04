// eslint-disable-next-line @typescript-eslint/no-explicit-any

export function getDateTimeZone(timezone: number) {
  const d = new Date();
  const utc = d.getTime() + d.getTimezoneOffset() * 60000;
  return new Date(utc + 1000 * timezone);
}

export function setBg(weather: any): string {
  if (weather === null || weather.cod === '404') {
    return 'app app-day-clear';
  }

  const {id} = weather.weather[0];

  function setNightMode() {
    const time = getDateTimeZone(weather.timezone);

    return time.getHours() <= 6 || time.getHours() >= 20;
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
