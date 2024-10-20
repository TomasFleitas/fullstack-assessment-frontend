import { employeeApi } from 'api/employee';
import { getAllKey, getDepartmentsHistoryKey } from 'api/employee/emploee.keys';
import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useLocation, useParams } from 'react-router-dom';
import { queryClient } from 'utilities/const';
import { EmployeeStatusEnum } from 'utilities/enums';
import { showNoti } from 'utilities/tools';

export const useEmployee = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const initialEmployee = state?.employee as Employee;
  const [employee, setEmployee] = useState<Employee | undefined>(
    initialEmployee,
  );

  const { isFetching, error } = useQuery({
    ...employeeApi.get(id),
    enabled: !employee && !!id,
    refetchOnWindowFocus: false,
    select: ({ data }) => data,
    onSuccess: setEmployee,
  });

  const { mutate: innerUpdateEmployeeStatus } = useMutation({
    ...employeeApi.updateStatus(),
    onSuccess: ({ data }) => {
      setEmployee(data);
      showNoti('success', 'Status successfully changed.');
    },
    onError: () => showNoti('error', 'Error changing status.'),
  });

  const { mutate: innerUpdateEmployeeDepartment, isLoading: isUpdating } =
    useMutation({
      ...employeeApi.updateDepartment(),
      onSuccess: ({ data }) => {
        queryClient.refetchQueries(getDepartmentsHistoryKey(employee.id));
        queryClient.refetchQueries(getAllKey);
        setEmployee(data);
        showNoti('success', 'Department successfully changed.');
      },
      onError: () => showNoti('error', 'Error changing deparment.'),
    });

  return {
    employee,
    setEmployee,
    isFetching,
    isUpdating,
    isActive: employee.status === EmployeeStatusEnum.ACTIVE,
    error,
    updateEmployeeDepartment: departmentId =>
      innerUpdateEmployeeDepartment({ id: employee.id, departmentId }),
    updateEmployeeStatus: () =>
      innerUpdateEmployeeStatus({
        id: employee.id,
        status:
          employee.status === EmployeeStatusEnum.INACTIVE
            ? EmployeeStatusEnum.ACTIVE
            : EmployeeStatusEnum.INACTIVE,
      }),
  };
};
