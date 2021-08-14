import { IWeatherResponse } from '../types/Weather';
import { ILocationTempDetails } from '../../models/LocationTempDetails';

export const formatWeatherResponse = (
  payload: IWeatherResponse
): ILocationTempDetails => {
  const sunrise = new Date(1000 * payload.sys.sunrise);
  const sunset = new Date(1000 * payload.sys.sunset);
  const { visibility } = payload;
  const { humidity } = payload.main;
  const currentTemp = payload.main.temp;
  const highTemp = payload.main.temp_max;
  const lowTemp = payload.main.temp_min;
  const { name } = payload;
  const weatherConditions = payload.weather.map(({ main }) => main);

  return {
    sunrise,
    sunset,
    visibility,
    humidity,
    currentTemp,
    highTemp,
    lowTemp,
    name,
    weatherConditions,
  };
};
