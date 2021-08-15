type TGetItem = <TReturnType>() => TReturnType;
type TSetItemValue = any;
type TSetItem = (value: TSetItemValue) => void;

export const useLocalStorage = (
  key: string,
  defaultValue: any
): [TGetItem, TSetItem] => {
  const setItem: TSetItem = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const getItem: TGetItem = () => {
    const item = localStorage.getItem(key);
    if (!item) {
      setItem(defaultValue);
      return defaultValue;
    }

    return JSON.parse(item);
  };

  return [getItem, setItem];
};
