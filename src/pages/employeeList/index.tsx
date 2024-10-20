import style from './index.module.scss';
import { EmployeeItem } from 'components/employeeItem';
import { CreateEditEmployeeModal } from 'components/createEditEmployeeModal';
import { useState } from 'react';
import { useEmployeeList } from 'hook/useEmployeeList';
import { Layout, Loading } from 'components';
import { Button, Empty } from 'antd';

export const EmployeeListPage = () => {
  const [open, setOpen] = useState(false);
  const { employees, isLoading } = useEmployeeList();

  return (
    <Layout>
      <div className={style['employee-list']}>
        <div className={style['employee-list-head']}>
          <Button type="primary" onClick={() => setOpen(true)}>
            New Employee
          </Button>
        </div>
        {(!isLoading && (
          <div className={style['employee-list-scroll']}>
            {(!!employees.length &&
              employees?.map(employee => (
                <EmployeeItem key={employee.id} employee={employee} />
              ))) || <Empty className={style.empty} />}
          </div>
        )) || <Loading />}
        <CreateEditEmployeeModal open={open} onCancel={() => setOpen(false)} />
      </div>
    </Layout>
  );
};
