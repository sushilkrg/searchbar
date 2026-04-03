import { useEffect, useState } from "react";

export const useDebounce = (value, callbackFunction, delay) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!value.trim()) {
        setData([]);
        return;
      }

      setLoading(true);

      try {
        const result = await callbackFunction(value);
        setData(result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [value, callbackFunction, delay]);

  return { data, loading };
};
