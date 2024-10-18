import { AxiosResponse } from 'axios';
import api, { QueryApiService } from '..';
import { Employee } from 'api/employee';

const BASE_URL = 'departments';

export interface Department {
  id: number;
  name: string;
  employees?: Employee[];
}

export interface DepartmentHistory {
  id: number;
  department: Department;
  changedAt: string;
}

export const getDepartments = (): QueryApiService<
  AxiosResponse<Department[]>
> => {
  return {
    queryKey: [BASE_URL],
    queryFn: () => api.get(BASE_URL),
  };
};
