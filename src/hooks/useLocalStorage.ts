import { useCallback } from 'react';

type TGetItem = <TReturnType>() => TReturnType;
type TSetItemValue = any;
type TSetItem = (value: TSetItemValue) => void;

export const useLocalStorage = (
  key: string,
  defaultValue: any
): [TGetItem, TSetItem] => {
  const setItem: TSetItem = useCallback(
    (value) => {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [key]
  );

  const getItem: TGetItem = useCallback(() => {
    const item = localStorage.getItem(key);
    if (!item) {
      setItem(defaultValue);
      return defaultValue;
    }

    return JSON.parse(item);
  }, [key, defaultValue]);

  return [getItem, setItem];
};
