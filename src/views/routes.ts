export const DASHBOARD_URL = '/';

export const LOCATION_DETAILS_URL = '/:locationName';
export const getLocationUrl = (locationName: string): string =>
  LOCATION_DETAILS_URL.replace(':locationName', locationName);
