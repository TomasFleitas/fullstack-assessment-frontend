import { Employee } from 'api/employee';
import style from './index.module.scss';
import { calculateTimeDifference } from 'utilities/tools';
import dayjs from 'dayjs';
import CustomButton from 'components/button';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from 'routers/routeData';

import { DeleteEmployeeModal } from 'components/deleteEmployeeModal';

type EmployeeProps = {
  employee: Employee;
};

export const EmployeeItem = ({ employee }: EmployeeProps) => {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(ROUTE.employeeDetail.replace(':id', employee.id + ''), {
      state: { employee },
    });
  };

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
        <CustomButton onClick={goToDetail}>View Details</CustomButton>
        <DeleteEmployeeModal employee={employee} />
      </div>
    </div>
  );
};
