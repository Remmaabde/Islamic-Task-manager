import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      // Handle error silently
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
