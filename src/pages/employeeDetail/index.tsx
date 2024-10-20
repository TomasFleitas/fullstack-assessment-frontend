import { Button } from 'antd';
import style from './index.module.scss';
import { calculateTimeDifference } from 'utilities/tools';
import dayjs from 'dayjs';
import { useEmployee } from 'hook/useEmployee';
import {
  DepartmentHistory,
  DepartmentSelector,
  Layout,
  Avatar,
  BreadCrumb,
} from 'components';

export const EmployeeDetailPage = () => {
  const { isActive, employee, updateEmployeeDepartment, updateEmployeeStatus } =
    useEmployee();

  return (
    <Layout>
      <BreadCrumb />
      <div className={style['employee-detail']}>
        <div className={style['employee-container']}>
          <Avatar
            size={'big'}
            isActive={isActive}
            photoUrl={employee.photoUrl}
          />
          <div className={style['employee-info']}>
            <div className={style['employee-data']}>
              <div className={style['employee-personal-info']}>
                <h2>
                  {employee.firstName} {employee.lastName}
                </h2>
                <p>Employee ID: {employee.id}</p>
                <p>Department: {employee.department.name}</p>
                <p>Telephone: {employee.phone || 'N/A'}</p>
                <p>Address: {employee.address || 'N/A'}</p>
              </div>
              <div className={style['employee-status']}>
                <p>
                  Hire Date: {dayjs(employee.hireDate).format('MMMM D, YYYY')}
                </p>
                <p>
                  Time at Company: {calculateTimeDifference(employee.hireDate)}
                </p>
                <Button
                  {...(isActive && { danger: true })}
                  type="primary"
                  onClick={updateEmployeeStatus}
                >
                  {isActive ? 'Deactivate' : 'Activate'}
                </Button>
              </div>
            </div>
            <DepartmentSelector
              defaultValue={employee.department.id}
              onUpdate={updateEmployeeDepartment}
            />
          </div>
        </div>
        <DepartmentHistory />
      </div>
    </Layout>
  );
};
