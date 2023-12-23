import { useEffect, useState } from "react";

const useGetApi = <T>(url: string) => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<T>();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
      });
  }, [url]);

  return {
    isError: isError,
    isLoading: isLoading,
    data: data,
    setData: setData,
  };
};

export default useGetApi;
