import { AxiosResponse } from 'axios';
import api, { MutateApiService, QueryApiService } from '..';
import { EmployeeStatusEnum } from 'utilities/enums';
import {
  BASE_URL,
  getAllKey,
  getDepartmentsHistoryKey,
  getKey,
} from './emploee.keys';

const getAll = (): QueryApiService<AxiosResponse<Employee[]>> => {
  return {
    queryKey: getAllKey,
    queryFn: () => api.get(BASE_URL),
  };
};

const get = (id: string | number): QueryApiService<AxiosResponse<Employee>> => {
  return {
    queryKey: getKey(id),
    queryFn: () => api.get(`${BASE_URL}/${id}`),
  };
};

const getDepartmentsHistory = (
  id: string | number,
): QueryApiService<AxiosResponse<DepartmentHistory[]>> => {
  return {
    queryKey: getDepartmentsHistoryKey(id),
    queryFn: () => api.get(`${BASE_URL}/${id}/department-history`),
  };
};

const create = (): MutateApiService<
  AxiosResponse<Employee>,
  CreateEmployee
> => ({
  mutationFn: (data: CreateEmployee) => api.post<Employee>(BASE_URL, data),
});

const update = (): MutateApiService<
  AxiosResponse<Employee>,
  { id: number; data: UpdateEmployee }
> => ({
  mutationFn: ({ id, data }) => api.put<Employee>(`${BASE_URL}/${id}`, data),
});

const updateDepartment = (): MutateApiService<
  AxiosResponse<Employee>,
  { id: number; departmentId: number }
> => ({
  mutationFn: ({ id, departmentId }) =>
    api.patch<Employee>(`${BASE_URL}/${id}/department`, { departmentId }),
});

const updateStatus = (): MutateApiService<
  AxiosResponse<Employee>,
  { id: number; status: EmployeeStatusEnum }
> => ({
  mutationFn: ({ id, status }) =>
    api.patch<Employee>(`${BASE_URL}/${id}/status`, { status }),
});

const deleteEmployee = (): MutateApiService<AxiosResponse<void>, number> => ({
  mutationFn: (id: number) => api.delete<void>(`${BASE_URL}/${id}`),
});

export const employeeApi = {
  get,
  getAll,
  create,
  deleteEmployee,
  updateDepartment,
  update,
  getDepartmentsHistory,
  updateStatus,
};
