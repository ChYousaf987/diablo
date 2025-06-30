import { useState, useEffect } from 'react';

const useFetch = (url, params = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        setLoading(true);
      const queryParams = new URLSearchParams(params).toString();
      const fullUrl = queryParams ? `${url}?${queryParams}` : url;

      try {
        const response = await fetch(fullUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, params]);

  return { data, loading, error };
};

export default useFetch;
