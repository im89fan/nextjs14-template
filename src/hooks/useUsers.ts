import { useEffect, useState } from "react";

interface DepartmentJson {
  id: number;
  name: string;
}

interface UserJson {
  id: number;
  firstName: string;
  lastName: string;
  department: DepartmentJson;
}

const useUsers = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<UserJson[]>();

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
      });
  }, []);

  return {
    isError: isError,
    isLoading: isLoading,
    data: data,
  };
};

export default useUsers;
