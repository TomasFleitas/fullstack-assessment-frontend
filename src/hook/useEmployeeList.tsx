import { employeeApi } from 'api/employee';
import { useQuery } from 'react-query';

export const useEmployeeList = () => {
  const { isFetching, data: employees = [] } = useQuery({
    ...employeeApi.getAll(),
    refetchOnWindowFocus: false,
    select: ({ data }) => data,
  });

  return {
    employees,
    isFetching,
  };
};
