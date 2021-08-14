export interface ILocationTempDetails {
  sunrise: Date;
  sunset: Date;
  visibility: number;
  humidity: number;
  currentTemp: number;
  highTemp: number;
  lowTemp: number;
  name: string;
  weatherConditions: string[];
}

export interface ILocationTempOverview {
  currentTemp: number;
  name: string;
}
