import { EmployeeDetailPage, EmployeeListPage } from 'pages';
import LoginPage from 'pages/login';

export const ROUTE = {
  root: '/',
  employeeList: '/employee',
  employeeDetail: '/employee/:id',
};

export const ROUTES_DATA = {
  public: [],

  private: [
    {
      path: ROUTE.employeeList,
      component: <EmployeeListPage />,
    },
    {
      path: ROUTE.employeeDetail,
      component: <EmployeeDetailPage />,
    },
  ],

  publicNotAllowBack: [
    {
      path: ROUTE.root,
      component: <LoginPage />,
    },
  ],
};
