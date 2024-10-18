import { DepartmentsList, EmployeeDetail, EmployeeList } from 'pages';

export const ROUTE = {
  root: '/',
  employeeList: '/employee',
  employeeDetail: '/employee/:id',
  departmentList: '/department',
};

export const ROUTES_DATA = [
  {
    path: ROUTE.employeeList,
    component: <EmployeeList />,
  },
  {
    path: ROUTE.employeeDetail,
    component: <EmployeeDetail />,
  },
  {
    path: ROUTE.departmentList,
    component: <DepartmentsList />,
  },
];
