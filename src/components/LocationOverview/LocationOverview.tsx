import { ILocationTempDetails } from '../../models/LocationTempDetails';
import { formatTemperature } from '../../utils/formatTemperature';

interface ILocationOverviewProps {
  data: ILocationTempDetails;
}

const LocationOverview: React.FC<ILocationOverviewProps> = ({ data }) => {
  return (
    <div className="text-center grid grid-cols-1 gap-4">
      <span className="italic text-xl text-gray-600">
        {data.weatherConditions.join(', ')}
      </span>
      <span className="text-5xl font-bold">
        {formatTemperature(data.currentTemp)}
      </span>
      <span className="text-gray-600">
        H: {formatTemperature(data.highTemp)}; L:{' '}
        {formatTemperature(data.lowTemp)}
      </span>
    </div>
  );
};

export default LocationOverview;
