import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { Home } from '../../pages/home/index.js';
import { generateRoutes } from '../../features/config/featuresCfg.jsx';

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
