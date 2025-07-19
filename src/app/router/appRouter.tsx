import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { generateRoutes } from '@/features/config';
import { Home } from '@/pages/home';

export const AppRouter = () => {
  const routes = generateRoutes();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {routes.map(({ path, component: Component, crumb }) => (
          <Route
            key={path}
            path={path}
            element={<Component />}
            handle={{ crumb: <Link to={path}>{crumb}</Link> }}
          />
        ))}
      </Routes>
    </Router>
  );
};
