import React from 'react';
import { Layout } from '../../app/layout/index.js';
import { Link } from 'react-router-dom';

export const NotFound = () => {
	return (
		<Layout>
			<p>Oops, the page does not exist</p>
			<Link to="/">Go home</Link>
		</Layout>
	);
};
