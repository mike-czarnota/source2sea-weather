import classNames from 'classnames';
import styles from './DetailsGrid.module.scss';

interface IDetailsGridProps {}

const DetailsGrid: React.FC<IDetailsGridProps> = ({ children }) => {
  return (
    <div
      className={classNames(styles.self, 'grid grid-cols-2 mt-10 bg-gray-900')}
    >
      {children}
    </div>
  );
};

export default DetailsGrid;
