import { Link } from 'react-router-dom';
import { Layout } from '../../app/layout/index.js';
import { CascadingStyleSheets } from '../../pages/cascadingStyleSheets/index.js';
import { JavaScript } from '../../pages/javaScript/index.js';

export const featuresPaths = [
	{
		path: '/js',
		component: () => (
			<Layout>
				<JavaScript />
			</Layout>
		),
	},
	{
		path: '/css',
		component: () => (
			<Layout>
				<CascadingStyleSheets />
			</Layout>
		),
	},
	{
		path: '*',
		component: () => (
			<Layout>
				<p>Oops, the page does not exist</p>
				<Link to="/">Go home</Link>
			</Layout>
		),
	},
];
