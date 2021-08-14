interface ILocationOverviewProps {}

const LocationOverview: React.FC<ILocationOverviewProps> = () => {
  return (
    <div className="text-center grid grid-cols-1 gap-4">
      <span className="italic text-xl text-gray-600">Sunny</span>
      <span className="text-5xl font-bold">12°C</span>
      <span className="text-gray-600">H: 14°C L: 3°C</span>
    </div>
  );
};

export default LocationOverview;
