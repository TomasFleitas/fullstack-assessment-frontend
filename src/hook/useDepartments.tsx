import { useQuery } from 'react-query';
import { deparmentsApi } from 'api/department';

export const useDepartments = () => {
  const {
    isLoading,
    data: departments = [],
    error,
  } = useQuery({
    ...deparmentsApi.getDepartments(),
    select: ({ data }) => data,
    refetchOnWindowFocus: false,
  });

  return { departments, isLoading, error };
};
