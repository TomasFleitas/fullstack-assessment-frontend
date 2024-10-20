import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import style from './index.module.scss';
import { ROUTE } from 'routers/routeData';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => navigate(ROUTE.employeeList);

  return (
    <div className={style['not-found-page']}>
      <h1>404</h1>
      <h2>Oops! Page not found</h2>
      <p>We can't seem to find the page you're looking for.</p>
      <Button type="primary" onClick={handleGoBack}>
        Go to Home
      </Button>
    </div>
  );
};
