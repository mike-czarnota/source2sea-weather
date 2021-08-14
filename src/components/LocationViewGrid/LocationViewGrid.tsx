interface ILocationViewGridProps {
  overview: React.ReactElement;
  details: React.ReactElement;
}

const LocationViewGrid: React.FC<ILocationViewGridProps> = ({
  overview,
  details,
}) => {
  return (
    <div className="xl:flex xl:justify-around">
      {overview}
      {details}
    </div>
  );
};

export default LocationViewGrid;
