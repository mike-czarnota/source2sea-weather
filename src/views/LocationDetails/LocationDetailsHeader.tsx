import { Link } from 'react-router-dom';
import * as routes from '../routes';
import { IconArrowLeft } from '../../components/Icons';

interface ILocationDetailsHeaderProps {
  locationName: string;
}

const LocationDetailsHeader: React.FC<ILocationDetailsHeaderProps> = ({
  locationName,
}) => {
  return (
    <div className="flex items-center justify-center">
      <Link to={routes.DASHBOARD_URL} className="mr-auto">
        <IconArrowLeft />
      </Link>

      <span>{locationName}</span>

      <IconArrowLeft className="invisible ml-auto" />
    </div>
  );
};

export default LocationDetailsHeader;
