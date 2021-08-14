export interface IWeatherResponse {
  main: {
    humidity: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  sys: {
    sunrise: number;
    sunset: number;
  };
  weather: {
    main: string;
  }[];
  visibility: number;
  name: string;
}
