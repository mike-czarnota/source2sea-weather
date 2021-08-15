import { useMutation } from 'react-fetching-library';
import type { QueryResponse } from 'react-fetching-library';
import { useEffect } from 'react';
import { IWeatherResponse } from '../../api/types/Weather';
import { getWeatherUrl } from '../../api/urls';
import Loader from '../Loader';
import { formatSimplifiedWeatherResponse } from '../../api/formatters/weather';
import LocationCard from './LocationCard';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import {
  customLocationKey,
  getLocationWeatherKey,
} from '../../constants/localStorage';

interface ILocationCardContainerProps {
  locationName: string;
  isCustomLocation?: boolean;
}

const useFetchWeatherData = (
  locationName: string,
  isCustomLocation?: boolean
): {
  payload?: IWeatherResponse;
  error: boolean;
} => {
  const { payload, error, mutate } = useMutation<IWeatherResponse>(() => ({
    method: 'GET',
    endpoint: getWeatherUrl(locationName.toLowerCase()),
  }));

  const [getItem, setItem] = useLocalStorage(
    getLocationWeatherKey(isCustomLocation ? customLocationKey : locationName),
    null
  );

  useEffect(() => {
    const run = async () => {
      const response = await mutate(null);

      setItem({
        error: response.error,
        payload: response.payload,
      });
    };

    run();
  }, []);

  const cachedData = getItem<QueryResponse<IWeatherResponse>>();

  return {
    payload: payload ?? cachedData?.payload,
    error: error ?? cachedData?.error,
  };
};

const LocationCardContainer: React.FC<ILocationCardContainerProps> = ({
  locationName,
  isCustomLocation,
}) => {
  const { payload, error } = useFetchWeatherData(
    locationName,
    isCustomLocation
  );

  if (!payload) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="italic">
        Error while loading location:{' '}
        <span className="font-bold">{locationName}</span>
      </div>
    );
  }

  const data = formatSimplifiedWeatherResponse(payload as IWeatherResponse);

  return (
    <LocationCard name={data.name} temperatureInCelsius={data.currentTemp} />
  );
};

export default LocationCardContainer;
