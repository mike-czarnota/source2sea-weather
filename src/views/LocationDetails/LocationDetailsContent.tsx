import { IWeatherResponse } from '../../api/types/Weather';
import Layout from '../../components/Layout';
import LocationDetailsHeader from './LocationDetailsHeader';
import Loader from '../../components/Loader';
import { formatWeatherResponse } from '../../api/formatters/weather';
import LocationViewGrid from '../../components/LocationViewGrid';
import LocationOverview from '../../components/LocationOverview';
import DetailsGrid from '../../components/DetailsGrid';
import LocationDetailsError from '../../components/LocationDetailsError';

interface ILocationDetailsContentProps {
  payload?: IWeatherResponse;
  error: boolean;
}

const LocationDetailsContent: React.FC<ILocationDetailsContentProps> = ({
  error,
  payload,
}) => {
  if (!payload) {
    return (
      <Layout
        header={<LocationDetailsHeader locationName={<Loader />} />}
        body={<Loader />}
      />
    );
  }

  if (error) {
    return <LocationDetailsError />;
  }

  const data = formatWeatherResponse(payload);

  return (
    <Layout
      header={<LocationDetailsHeader locationName={data.name} />}
      body={
        <LocationViewGrid
          overview={<LocationOverview data={data} />}
          details={<DetailsGrid data={data} />}
        />
      }
    />
  );
};

export default LocationDetailsContent;
