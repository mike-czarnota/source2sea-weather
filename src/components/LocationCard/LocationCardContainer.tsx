import { useQuery } from 'react-fetching-library';
import { IWeatherResponse } from '../../api/types/Weather';
import { getWeatherUrl } from '../../api/urls';
import Loader from '../Loader';
import { formatSimplifiedWeatherResponse } from '../../api/formatters/weather';
import LocationCard from './LocationCard';

interface ILocationCardContainerProps {
  locationName: string;
}

const LocationCardContainer: React.FC<ILocationCardContainerProps> = ({
  locationName,
}) => {
  const { loading, payload, error } = useQuery<IWeatherResponse>({
    method: 'GET',
    endpoint: getWeatherUrl(locationName.toLowerCase()),
  });

  if (loading) {
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
