import LocationDetailsHeader from '../../views/LocationDetails/LocationDetailsHeader';
import Layout from '../Layout';

interface ILocationDetailsErrorProps {}

const LocationDetailsError: React.FC<ILocationDetailsErrorProps> = () => {
  return (
    <Layout
      header={<LocationDetailsHeader locationName="..." />}
      body={<div>City not found. Change your data and try again</div>}
    />
  );
};

export default LocationDetailsError;
