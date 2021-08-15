export const customLocationKey = 'custom-location';

export const getLocationWeatherKey = (locationName: string): string => {
  return `location-data-${locationName}`;
};
