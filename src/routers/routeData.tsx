import { EmployeeDetail, EmployeeList } from 'pages';

export const ROUTE = {
  root: '/',
  employeeList: '/employee',
  employeeDetail: '/employee/:id',
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
];
