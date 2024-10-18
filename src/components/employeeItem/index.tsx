import { Employee } from 'api/employee';
import style from './index.module.scss';
import { Button } from 'antd';
import { calculateTimeDifference } from 'utilities/tools';
import dayjs from 'dayjs';

type EmployeeProps = {
  employee: Employee;
};

export const EmployeeItem = ({ employee }: EmployeeProps) => {
  return (
    <div className={style['employee-card']}>
      <div className={style['employee-avatar']} />
      <div className={style['employee-details']}>
        <p className={style['employee-name']}>
          {employee.firstName} {employee.lastName}
          <span className={style['employee-department']}>
            ({employee.department.name})
          </span>
        </p>
        <div className={style['employee-hire-date']}>
          <p>Hire Date: {dayjs(employee.hireDate).format('MMMM D, YYYY')}</p>
          <p>Time at Company: {calculateTimeDifference(employee.hireDate)}</p>
        </div>
      </div>
      <div className={style['employee-actions']}>
        <Button className={style['view-details-button']}>View Details</Button>
        <Button className={style['delete-button']}>&#x2716;</Button>
      </div>
    </div>
  );
};
