import { useEffect, useRef, useState } from 'react';
import { QueryResponse } from 'react-fetching-library';
import { LocationCardContainer } from '../LocationCard';
import LocationCardForm, { TSubmitValues } from './LocationCardForm';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import {
  customLocationKey,
  getLocationWeatherKey,
} from '../../constants/localStorage';
import { IWeatherResponse } from '../../api/types/Weather';

interface ICustomLocationCardProps {}

const CustomLocationCard: React.FC<ICustomLocationCardProps> = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [getItem, setItem] = useLocalStorage(
    getLocationWeatherKey(customLocationKey),
    ''
  );

  const userLocationRef = useRef(
    getItem<QueryResponse<IWeatherResponse>>().payload?.name ?? ''
  );

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
          <LocationCardContainer
            isCustomLocation
            locationName={userLocationRef.current}
          />

          <button type="button" className="text-blue-500" onClick={toggleEdit}>
            Edit
          </button>
        </>
      )}
    </div>
  );
};

export default CustomLocationCard;
