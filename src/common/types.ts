export interface IWeather {
  coord?: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface Clouds {
  all?: number;
}

export interface Coord {
  lon?: number;
  lat?: number;
}

export interface Main {
  temp: number;
  feels_like?: number;
  temp_min?: number;
  temp_max?: number;
  pressure?: number;
  humidity: number;
}

export interface Sys {
  type?: number;
  id?: number;
  country?: string;
  sunrise?: number;
  sunset?: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Wind {
  speed?: number;
  deg?: number;
}

export interface IForecast {
  cod: string;
  message: number;
  cnt: number;
  list: ListForecast[];
  city: CityForecast;
}

export interface CityForecast {
  id: number;
  name: string;
  coord: CoordForecast;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface CoordForecast {
  lat: number;
  lon: number;
}

export interface ListForecast {
  dt: number;
  main: MainClassForecast;
  weather: WeatherForecast[];
  clouds: CloudsForecast;
  wind: WindForecast;
  visibility: number;
  pop: number;
  sys: SysForecast;
  dt_txt: string;
  rain?: RainForecast;
}
export interface ListForecastItem extends ListForecast {
  day: number;
  time: number;
  timezone: number;
}
export interface CloudsForecast {
  all: number;
}

export interface MainClassForecast {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface RainForecast {
  '3h': number;
}

export interface SysForecast {
  pod?: string;
}

export interface WeatherForecast {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WindForecast {
  speed: number;
  deg: number;
}

// Props //
export interface IDaysProps {
  forecastDays: IWeather[][];
  timezone: number;
}
export interface IDayProps {
  forecastDay: IWeather[];
  id: number;
  timezone: number;
  selected?: boolean;
}

export interface IHoursProps {
  forecast: ListForecastItem[];
}
export interface IHourProps {
  forecastItem: ListForecastItem;
  key: number;
}
export interface IPrecipitationProps {
  weather: ListForecastItem | IWeather;
  size: string;
}
