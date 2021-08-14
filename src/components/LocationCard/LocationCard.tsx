import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { formatTemperature } from '../../utils/formatTemperature';

import styles from './LocationCard.module.scss';
import { getLocationUrl } from '../../views/routes';

interface ILocationCardProps {
  name: string;
  temperatureInCelsius: number;
}

const LocationCard: React.FC<ILocationCardProps> = ({
  name,
  temperatureInCelsius,
}) => (
  <Link
    className={classNames(
      styles.self,
      `p-5 md:px-10 md:py-7 flex justify-between items-center border rounded-lg bg-white border-gray-300 hover:border-gray-900 duration-200 ease-in-out shadow-md hover:shadow-2xl`
    )}
    to={getLocationUrl(name)}
  >
    <span className="text-2xl">{name}</span>
    <span className="text-xl">{formatTemperature(temperatureInCelsius)}</span>
  </Link>
);

export default LocationCard;
