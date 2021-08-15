import {
  formatSimplifiedWeatherResponse,
  formatWeatherResponse,
} from './weather';

const getData = () => ({
  coord: {
    lon: -70.3937,
    lat: 44.0606,
  },
  weather: [
    {
      id: 800,
      main: 'Clear',
      description: 'clear sky',
      icon: '01d',
    },
  ],
  base: 'stations',
  main: {
    temp: 13.93,
    feels_like: 13.68,
    temp_min: 11.59,
    temp_max: 17.22,
    pressure: 1021,
    humidity: 88,
  },
  visibility: 10000,
  wind: {
    speed: 1.54,
    deg: 360,
  },
  clouds: {
    all: 1,
  },
  dt: 1629024485,
  sys: {
    type: 2,
    id: 2040397,
    country: 'US',
    sunrise: 1629020741,
    sunset: 1629071195,
  },
  timezone: -14400,
  id: 4975603,
  name: 'Poland',
  cod: 200,
});

describe('testing weather.test.ts', () => {
  it('should pass formatWeatherResponse', () => {
    const data = getData();

    const expected = {
      sunrise: new Date(1629020741 * 1000),
      sunset: new Date(1629071195 * 1000),
      visibility: 10000,
      humidity: 88,
      currentTemp: 13.93,
      highTemp: 17.22,
      lowTemp: 11.59,
      name: 'Poland',
      weatherConditions: ['Clear'],
    };

    expect(formatWeatherResponse(data)).toEqual(expected);
  });

  it('should pass formatSimplifiedWeatherResponse', () => {
    const data = getData();

    const expected = {
      currentTemp: 13.93,
      name: 'Poland',
    };

    expect(formatSimplifiedWeatherResponse(data)).toEqual(expected);
  });
});
