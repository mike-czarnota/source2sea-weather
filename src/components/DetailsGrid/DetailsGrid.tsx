import classNames from 'classnames';
import styles from './DetailsGrid.module.scss';
import DetailsItem from '../DetailsItem';
import { ILocationTempDetails } from '../../models/LocationTempDetails';
import { formatTime } from '../../utils/formatDate';

interface IDetailsGridProps {
  data: ILocationTempDetails;
}

const DetailsGrid: React.FC<IDetailsGridProps> = ({ data }) => {
  return (
    <div
      className={classNames(
        styles.self,
        'grid grid-cols-2 mt-10 bg-gray-900 md:mx-auto xl:mx-0'
      )}
    >
      <DetailsItem label="Sunrise" value={formatTime(data.sunrise)} />

      <DetailsItem label="Sunset" value={formatTime(data.sunset)} />

      <DetailsItem label="Humidity" value={`${data.humidity}%`} />

      <DetailsItem
        label="Visibility"
        value={`${Math.round(data.visibility / 1000).toFixed(2)} km`}
      />
    </div>
  );
};

export default DetailsGrid;
