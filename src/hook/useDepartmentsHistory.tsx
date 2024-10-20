import { useQuery } from 'react-query';
import { employeeApi } from 'api/employee';
import { useParams } from 'react-router-dom';

export const useDepartmentsHistory = () => {
  const { id } = useParams();

  const {
    isFetching,
    data: departmentsHistory = [],
    error,
  } = useQuery({
    ...employeeApi.getDepartmentsHistory(id),
    select: ({ data }) => data,
  });

  return {
    departmentsHistory,
    isFetching,
    error,
  };
};
