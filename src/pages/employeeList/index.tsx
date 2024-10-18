import { employeeListMock } from 'api/employee';
import style from './index.module.scss';
import { EmployeeItem } from 'components/employeeItem';
import { Button } from 'antd';

export const EmployeeList = () => {
  return (
    <div className={style['employee-list']}>
      <div className={style['employee-list-head']}>
        <Button className={style['new-employee-button']}>New Employee</Button>
      </div>
      <div className={style['employee-list-scroll']}>
        {employeeListMock.map(employee => (
          <EmployeeItem key={employee.id} employee={employee} />
        ))}
      </div>
    </div>
  );
};
