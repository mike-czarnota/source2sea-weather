import { RouteComponentProps } from 'react-router-dom';
import Layout from '../../components/Layout';
import DetailsItem from '../../components/DetailsItem';
import DetailsGrid from '../../components/DetailsGrid';
import LocationOverview from '../../components/LocationOverview';
import LocationDetailsHeader from './LocationDetailsHeader';
import LocationViewGrid from '../../components/LocationViewGrid';

interface ILocationDetailsProps
  extends RouteComponentProps<{
    locationName: string;
  }> {}

const LocationDetailsRootView: React.FC<ILocationDetailsProps> = ({
  match: {
    params: { locationName },
  },
}) => {
  return (
    <Layout
      header={<LocationDetailsHeader locationName={locationName} />}
      body={
        <LocationViewGrid
          overview={<LocationOverview />}
          details={
            <DetailsGrid>
              <DetailsItem label="Sunrise" value="05:40" />

              <DetailsItem label="Sunset" value="20:26" />

              <DetailsItem label="Humidity" value="76%" />

              <DetailsItem label="Visibility" value="16.2 km" />
            </DetailsGrid>
          }
        />
      }
    />
  );
};

export default LocationDetailsRootView;
