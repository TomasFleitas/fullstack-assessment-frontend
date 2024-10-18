import { AxiosResponse } from 'axios';
import api, { MutateApiService, QueryApiService } from '..';
import { Department, DepartmentHistory } from 'api/department';

const BASE_URL = 'employees';

export const employeeListMock: Employee[] = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    hireDate: '2021-05-02',
    department: { id: 1, name: 'Human Resources' },
    phone: '+123456789',
    address: '123 Main St, Cityville',
    departmentHistory: [
      {
        id: 1,
        department: { id: 2, name: 'IT' },
        changedAt: '2022-01-10T09:00:00Z',
      },
    ],
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    hireDate: '2020-10-15',
    department: { id: 2, name: 'IT' },
    phone: '+987654321',
    address: '456 Oak St, Townsville',
    departmentHistory: [
      {
        id: 2,
        department: { id: 1, name: 'Human Resources' },
        changedAt: '2021-05-02T08:30:00Z',
      },
    ],
  },
  {
    id: 3,
    firstName: 'Alice',
    lastName: 'Johnson',
    hireDate: '2022-03-22',
    department: { id: 3, name: 'Marketing' },
    address: '789 Pine St, Villageville',
    departmentHistory: [
      {
        id: 3,
        department: { id: 2, name: 'IT' },
        changedAt: '2023-02-01T10:45:00Z',
      },
      {
        id: 4,
        department: { id: 1, name: 'Human Resources' },
        changedAt: '2021-08-15T11:15:00Z',
      },
    ],
  },
  {
    id: 4,
    firstName: 'Bob',
    lastName: 'Williams',
    hireDate: '2021-11-05',
    department: { id: 4, name: 'Finance' },
    phone: '+159753456',
    address: '321 Elm St, Hamlet',
    departmentHistory: [],
  },
  {
    id: 5,
    firstName: 'Sara',
    lastName: 'Brown',
    hireDate: '2019-09-13',
    department: { id: 3, name: 'Marketing' },
    phone: '+147852369',
    address: '654 Cedar St, Metropolis',
    departmentHistory: [
      {
        id: 5,
        department: { id: 4, name: 'Finance' },
        changedAt: '2020-06-01T09:30:00Z',
      },
    ],
  },
];

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  hireDate: string;
  department: Department;
  phone?: string;
  address?: string;
  departmentHistory?: DepartmentHistory[];
}

export interface CreateEmployee {
  firstName: string;
  lastName: string;
  hireDate: string;
  departmentId: number;
  phone?: string;
  address: string;
}

export interface UpdateEmployee {
  firstName?: string;
  lastName?: string;
  hireDate?: string;
  departmentId?: number;
  phone?: string;
  address?: string;
}

export const getAll = (): QueryApiService<AxiosResponse<Employee[]>> => {
  return {
    queryKey: [BASE_URL],
    queryFn: () => api.get(BASE_URL),
  };
};

export const get = (
  id: string | number,
): QueryApiService<AxiosResponse<Employee[]>> => {
  return {
    queryKey: [BASE_URL, id],
    queryFn: () => api.get(`${BASE_URL}/${id}`),
  };
};

export const getDepartmentsHistory = (
  id: string | number,
): QueryApiService<AxiosResponse<DepartmentHistory[]>> => {
  return {
    queryKey: [BASE_URL, id, 'department-history'],
    queryFn: () => api.get(`${BASE_URL}/${id}/department-history`),
  };
};

export const create = (): MutateApiService<
  AxiosResponse<Employee>,
  CreateEmployee
> => ({
  mutationFn: (data: CreateEmployee) => api.post<Employee>(BASE_URL, data),
});

export const update = (): MutateApiService<
  AxiosResponse<Employee>,
  { id: number; data: UpdateEmployee }
> => ({
  mutationFn: ({ id, data }) => api.put<Employee>(`${BASE_URL}/${id}`, data),
});

export const deleteEmployee = (): MutateApiService<
  AxiosResponse<void>,
  number
> => ({
  mutationFn: (id: number) => api.delete<void>(`${BASE_URL}/${id}`),
});
