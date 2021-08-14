import { formatTemperature } from '../../utils/formatTemperature';

import styles from './LocationCard.module.scss';

interface ILocationCardProps {
  name: string;
  temperatureInCelsius: number;
}

const LocationCard: React.FC<ILocationCardProps> = ({
  name,
  temperatureInCelsius,
}) => (
  <div
    className={`${styles.self} p-5 flex justify-between items-center border rounded-lg bg-white border-gray-300 hover:border-gray-900 duration-200 ease-in-out shadow-md hover:shadow-2xl`}
  >
    <span className="text-2xl">{name}</span>
    <span className="text-xl">{formatTemperature(temperatureInCelsius)}</span>
  </div>
);

export default LocationCard;
