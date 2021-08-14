import { LocationCardContainer } from '../LocationCard';
import CustomLocationCard from '../CustomLocationCard';

interface ILocationListProps {}

const locations = [
  {
    name: 'Berlin',
  },
  {
    name: 'London',
  },
];

const LocationList: React.FC<ILocationListProps> = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:gap-6 xl:grid-cols-3 xl:gap-4">
      <CustomLocationCard />

      {locations.map(({ name }) => (
        <LocationCardContainer key={name} locationName={name} />
      ))}
    </div>
  );
};

export default LocationList;
