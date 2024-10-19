import style from './index.module.scss';
import { EmployeeItem } from 'components/employeeItem';
import CustomButton from 'components/button';
import { CreateEmployeeModal } from 'components/addEmployeeModal';
import { useState } from 'react';
import { useEmployeeList } from 'hook/useEmployeeList';
import { Loading } from 'components';
import { Empty } from 'antd';

export const EmployeeList = () => {
  const [open, setOpen] = useState(false);
  const { employees, isFetching } = useEmployeeList();

  return (
    <div className={style['employee-list']}>
      <div className={style['employee-list-head']}>
        <CustomButton onClick={() => setOpen(true)}>New Employee</CustomButton>
      </div>
      {(!isFetching && (
        <div className={style['employee-list-scroll']}>
          {(!!employees.length &&
            employees?.map(employee => (
              <EmployeeItem key={employee.id} employee={employee} />
            ))) || <Empty className={style.empty} />}
        </div>
      )) || <Loading />}
      <CreateEmployeeModal open={open} onCancel={() => setOpen(false)} />
    </div>
  );
};
