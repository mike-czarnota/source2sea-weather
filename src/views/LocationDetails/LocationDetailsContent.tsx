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
  loading: boolean;
  payload?: IWeatherResponse;
  error: boolean;
}

const LocationDetailsContent: React.FC<ILocationDetailsContentProps> = ({
  loading,
  error,
  payload,
}) => {
  if (loading) {
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

  const data = formatWeatherResponse(payload as IWeatherResponse);

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
