import { Link } from 'react-router-dom';

export const Home = () => {
	return (
		<div>
			<Link to={'/css'}>css</Link>
			<br />
			<Link to={'/js'}>js</Link>
			<br />
			<Link to={'/404'}>404</Link>
		</div>
	);
};
