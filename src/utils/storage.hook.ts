import { useState } from "react";
import {
  getValueFromStorage,
  removeValueFromStorage,
  storeValueInStorage,
} from "src/utils/storage.helper";

export const useLocalStorage = (key: string, initialValue = "") => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = getValueFromStorage(key);
      return item ? item : initialValue;
    } catch (err) {
      console.error(err);
      return initialValue;
    }
  });

  const setValue = (value: string) => {
    storeValueInStorage(key, value);
    setStoredValue(value);
  };

  const clearValue = () => {
    removeValueFromStorage(key);
    setStoredValue("");
  };

  return [storedValue, setValue, clearValue] as const;
};
