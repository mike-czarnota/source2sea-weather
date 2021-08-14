import { WEATHER_API_KEY } from '../config/env';

export const getWeatherUrl = (query: string): string =>
  `/api/weather?q=${query}&units=metric&appid=${WEATHER_API_KEY}`;
