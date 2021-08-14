import { useEffect, useRef, useState } from 'react';
import { LocationCardContainer } from '../LocationCard';
import LocationCardForm, { TSubmitValues } from './LocationCardForm';

interface ICustomLocationCardProps {}

const CustomLocationCard: React.FC<ICustomLocationCardProps> = () => {
  const [isEditing, setIsEditing] = useState(false);

  const userLocationRef = useRef('');

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
