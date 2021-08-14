type TGetItem = () => string;
type TSetItem = (value: string) => void;

export const useLocalStorage = (
  key: string,
  defaultValue: string
): [TGetItem, TSetItem] => {
  const setItem: TSetItem = (value: string): void => {
    localStorage.setItem(key, value);
  };

  const getItem: TGetItem = (): string => {
    const item = localStorage.getItem(key);
    if (!item) {
      setItem(defaultValue);
      return defaultValue;
    }

    return item;
  };

  return [getItem, setItem];
};
