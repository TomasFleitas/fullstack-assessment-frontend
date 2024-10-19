import { useQuery } from 'react-query';
import { employeeApi } from 'api/employee';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';

const departmentHistoryColumns = [
  {
    title: 'Date',
    dataIndex: 'changedAt',
    key: 'changedAt',
    render: (date: string) => dayjs(date).format('MM/DD/YYYY'),
  },
  {
    title: 'Department',
    dataIndex: 'department',
    key: 'department',
    render: (department: { name: string }) => department.name,
  },
];

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
    columns: departmentHistoryColumns,
  };
};
