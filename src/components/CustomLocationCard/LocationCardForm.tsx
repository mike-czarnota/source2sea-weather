import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';

export type TSubmitValues = { locationName: string };

interface ILocationCardInputProps {
  onSubmit: (values: TSubmitValues) => void;
}

const LocationCardForm: React.FC<ILocationCardInputProps> = ({ onSubmit }) => {
  const [userLocation, setUserLocation] = useState('');
  const [error, setError] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const onFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (userLocation) {
      onSubmit({
        locationName: userLocation,
      });
    } else {
      setError('Please, provide a location');
    }
  };

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setError('');
    setUserLocation(event.target.value);
  };

  return (
    <div className="flex flex-col">
      <form onSubmit={onFormSubmit}>
        <input
          ref={inputRef}
          className="w-full"
          type="text"
          placeholder="Where do you want to check the weather?"
          value={userLocation}
          onChange={onInputChange}
        />
      </form>

      {error && <span className="text-red-400">{error}</span>}

      <span className="text-sm italic text-gray-400">
        Hit &quot;Enter&quot; to search
      </span>
    </div>
  );
};

export default LocationCardForm;
