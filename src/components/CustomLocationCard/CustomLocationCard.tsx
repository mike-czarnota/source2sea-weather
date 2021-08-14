import { useEffect, useRef, useState } from 'react';
import { LocationCardContainer } from '../LocationCard';
import LocationCardForm, { TSubmitValues } from './LocationCardForm';
import { useLocalStorage } from '../../hooks/useLocalStorage';

interface ICustomLocationCardProps {}

const key = 'custom-location';

const CustomLocationCard: React.FC<ICustomLocationCardProps> = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [getItem, setItem] = useLocalStorage(key, '');

  const userLocationRef = useRef(getItem());

  useEffect(() => {
    if (!userLocationRef.current) {
      setIsEditing(true);
    }
  }, []);

  const toggleEdit = () => {
    setIsEditing(true);
  };

  const onSubmit = (values: TSubmitValues) => {
    userLocationRef.current = values.locationName;
    setIsEditing(false);
    setItem(userLocationRef.current);
  };

  return (
    <div>
      {isEditing ? (
        <LocationCardForm onSubmit={onSubmit} />
      ) : (
        <>
          <LocationCardContainer locationName={userLocationRef.current} />

          <button type="button" className="text-blue-500" onClick={toggleEdit}>
            Edit
          </button>
        </>
      )}
    </div>
  );
};

export default CustomLocationCard;
