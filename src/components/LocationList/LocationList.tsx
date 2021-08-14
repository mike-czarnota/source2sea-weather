import LocationCard from '../LocationCard';

interface ILocationListProps {}

const locations = [
  {
    name: 'My location',
    temperatureInCelsius: 14,
  },
  {
    name: 'Berlin',
    temperatureInCelsius: 14,
  },
  {
    name: 'London',
    temperatureInCelsius: 28,
  },
];

const LocationList: React.FC<ILocationListProps> = () => (
  <div className="grid grid-cols-1 gap-4 md:gap-6 xl:grid-cols-3 xl:gap-4">
    {locations.map(({ name, temperatureInCelsius }) => (
      <LocationCard
        key={name}
        name={name}
        temperatureInCelsius={temperatureInCelsius}
      />
    ))}
  </div>
);

export default LocationList;
