import { memo } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import { ROUTES_DATA } from './routeData';
import { RouteProtected } from 'components/routeProtected';
import { NotFoundPage } from 'components';

export const Routers = memo(() => {
  const renderRoutes = (
    routes: Array<{ path: string; component: JSX.Element }>,
  ) => {
    return routes.map(route => (
      <Route key={route.path} path={route.path} element={route.component} />
    ));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RouteProtected direction="backwards" />}>
          {renderRoutes(ROUTES_DATA.publicNotAllowBack)}
        </Route>

        <Route path="/" element={<RouteProtected direction="fordwards" />}>
          {renderRoutes(ROUTES_DATA.private)}
        </Route>

        <Route path="/" element={<Outlet />}>
          {renderRoutes(ROUTES_DATA.public)}
        </Route>

        <Route key="not-found" path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
});
