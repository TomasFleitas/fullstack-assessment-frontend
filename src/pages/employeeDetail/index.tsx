import { Button } from 'antd';
import style from './index.module.scss';
import { calculateTimeDifference } from 'utilities/tools';
import dayjs from 'dayjs';
import { useEmployee } from 'hook/useEmployee';
import { DepartmentHistory, DepartmentSelector } from 'components';
import { EmployeeStatusEnum } from 'utilities/enums';

export const EmployeeDetail = () => {
  const { employee, updateEmployeeDepartment, updateEmployeeStatus } =
    useEmployee();

  return (
    <div className={style['employee-detail']}>
      <div className={style['employee-container']}>
        <div className={style['employee-avatar']}>
          {employee.status === EmployeeStatusEnum.INACTIVE && (
            <div className={style['inactive-label']}>Inactivate</div>
          )}
        </div>
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
                danger
                className={style['deactivate-button']}
                onClick={updateEmployeeStatus}
              >
                {employee.status === EmployeeStatusEnum.ACTIVE
                  ? 'Deactivate'
                  : 'Activate'}
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
  );
};
