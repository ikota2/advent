import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from 'react-router-dom'

import { Layout } from '../layout';
import { Home } from '../../pages/home';
import { featuresPaths } from '../../features/config/';

export const AppRouter = () => {
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={<Layout><Home/></Layout>}
				/>

				{featuresPaths.map(({ path, component: Component }) => (
					<Route
						key={path}
						path={path}
						element={<Component />}
						handle={{ crumb: <Link to={`/${path}`}>{path}</Link> }}
					/>
				))}

			</Routes>
		</Router>
	)
}
