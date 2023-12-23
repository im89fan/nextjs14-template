import useGetApi from "./useGetApi";

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
  return useGetApi<UserJson[]>("/api/users");
};

export default useUsers;
