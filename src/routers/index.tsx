import { memo } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ROUTE, ROUTES_DATA } from './routeData';

export const Routers = memo(() => {
  return (
    <Router>
      <Routes>
        {ROUTES_DATA.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
        <Route key="not-found" path="*" element={<Navigate to={ROUTE.root} />} />
      </Routes>
    </Router>
  );
});
