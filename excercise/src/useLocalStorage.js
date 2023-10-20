import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  const storedValue = localStorage.getItem(key);

  const [value, setValue] = useState(storedValue || initialValue);

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;