import { Table } from 'antd';
import { useDepartmentsHistory } from 'hook/useDepartmentsHistory';
import style from './index.module.scss';

export const DepartmentHistory = () => {
  const { departmentsHistory, isFetching, columns } = useDepartmentsHistory();

  return (
    <div className={style['department-history']}>
      <h3>Department History</h3>
      <Table
        loading={isFetching}
        dataSource={departmentsHistory}
        columns={columns}
        pagination={false}
        rowKey="id"
      />
    </div>
  );
};
