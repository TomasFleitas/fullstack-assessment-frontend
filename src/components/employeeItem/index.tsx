import style from './index.module.scss';
import { calculateTimeDifference } from 'utilities/tools';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from 'routers/routeData';
import { DeleteEmployeeModal } from 'components/deleteEmployeeModal';
import { Button } from 'antd';
import { Avatar } from 'components';
import { EmployeeStatusEnum } from 'utilities/enums';

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
      <Avatar
        size={'small'}
        photoUrl={employee.photoUrl}
        isActive={employee.status === EmployeeStatusEnum.ACTIVE}
      />
      <div className={style['employee-details']}>
        <p className={style['employee-name']}>
          {employee.firstName} {employee.lastName}
          <span className={style['employee-department']}>
            ({employee.department?.name})
          </span>
        </p>
        <div className={style['employee-hire-date']}>
          <p>Hire Date: {dayjs(employee.hireDate).format('MMMM D, YYYY')}</p>
          <p>Time at Company: {calculateTimeDifference(employee.hireDate)}</p>
        </div>
      </div>
      <div className={style['employee-actions']}>
        <Button type="primary" onClick={goToDetail}>
          View Details
        </Button>
        <DeleteEmployeeModal employee={employee} />
      </div>
    </div>
  );
};
