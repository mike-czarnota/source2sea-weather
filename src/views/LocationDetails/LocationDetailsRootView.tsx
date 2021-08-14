import { RouteComponentProps } from 'react-router-dom';
import { useQuery } from 'react-fetching-library';
import { getWeatherUrl } from '../../api/urls';
import { IWeatherResponse } from '../../api/types/Weather';
import LocationDetailsContent from './LocationDetailsContent';

interface ILocationDetailsProps
  extends RouteComponentProps<{
    locationName: string;
  }> {}

const LocationDetailsRootView: React.FC<ILocationDetailsProps> = ({
  match: {
    params: { locationName },
  },
}) => {
  const { loading, payload, error } = useQuery<IWeatherResponse>({
    method: 'GET',
    endpoint: getWeatherUrl(locationName.toLowerCase()),
  });

  return (
    <LocationDetailsContent loading={loading} payload={payload} error={error} />
  );
};

export default LocationDetailsRootView;
