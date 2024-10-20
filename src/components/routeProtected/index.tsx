import { useSession } from 'context/sessionContext';
import { Navigate, Outlet } from 'react-router-dom';
import { ROUTE } from 'routers/routeData';

type RouteDirection = {
  direction: 'fordwards' | 'backwards';
};

export const RouteProtected = ({ direction }: RouteDirection) => {
  const { isLogged } = useSession();

  if (direction === 'fordwards') {
    return (isLogged && <Outlet />) || <Navigate to={ROUTE.root} />;
  }

  if (direction === 'backwards') {
    return (!isLogged && <Outlet />) || <Navigate to={ROUTE.employeeList} />;
  }
};
