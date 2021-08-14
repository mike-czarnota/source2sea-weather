import classNames from 'classnames';

interface IIconArrowLeftProps {
  className?: string;
}

const IconArrowLeft: React.FC<IIconArrowLeftProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={classNames(className, 'h-5 w-5')}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
      clipRule="evenodd"
    />
  </svg>
);

export default IconArrowLeft;
