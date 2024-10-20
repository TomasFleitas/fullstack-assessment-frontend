import { useDepartmentsHistory } from 'hook/useDepartmentsHistory';
import style from './index.module.scss';
import { Loading } from 'components/loading';

export const DepartmentHistory = () => {
  const { departmentsHistory, isFetching } = useDepartmentsHistory();

  if (isFetching) {
    return <Loading />;
  }

  return (
    <div className={style['department-history']}>
      <h3>Department History</h3>
      <div className={style['department-history-list']}>
        {departmentsHistory.map(history => (
          <div key={history.id} className={style['department-history-item']}>
            <div className={style['history-date']}>
              <b>Date:</b> {history.changedAt}
            </div>
            <div className={style['history-department']}>
              <b>Department:</b> {history.department.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
