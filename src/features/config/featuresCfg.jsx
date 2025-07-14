
import {
	CharacterCounter,
	TagInput,
} from '../javascript';

import { OnlyToggle } from '../css';
import { FeaturePage } from '../../pages/FeaturePage';
import { NotFound } from '../../pages/notFound';

export const generateRoutes = () => {
	const routes = [];

	Object.entries(featuresCfg).forEach(([key, config]) => {
		routes.push({
			path: `/${key}`,
			component: config.component,
			crumb: config.title,
		});

		config.items.forEach((item) => {
			routes.push({
				path: item.path,
				component: item.component,
				crumb: `Day ${item.day}: ${item.name}`,
			});
		});
	});

	routes.push({
		path: '*',
		component: NotFound,
		crumb: 'Not Found',
	});

	return routes;
};

export const getFeatureData = (featureKey) => {
	const config = featuresCfg[featureKey];
	if (!config) return null;

	return {
		title: config.title,
		items: config.items.map((item) => ({
			name: `Day ${item.day}: ${item.name}`,
			isAble: item.isAble,
			path: item.path,
		})),
	};
};

const buildFeatureConfig = () => {
	const jsItems = [
		{
			day: 1,
			name: 'Show and Hide Password Input',
			component: () => {},
			isAble: false,
		},
		{ day: 2, name: 'Custom Dropdown', component: () => {}, isAble: false },
		{ day: 3, name: 'Resizable Text Area', component: () => {}, isAble: false },
		{
			day: 4,
			name: 'Resizable Split Panels',
			component: () => {},
			isAble: false,
		},
		{
			day: 5,
			name: 'Character Counter',
			component: CharacterCounter,
			isAble: true,
		},
		{ day: 6, name: 'Copy to Clipboard', component: () => {}, isAble: false },
		{ day: 7, name: 'Slugify Title', component: () => {}, isAble: false },
		{ day: 8, name: 'Tag Input', component: TagInput, isAble: true },
	];

	const cssItems = [
		{ day: 1, name: 'Only Toggle', component: OnlyToggle, isAble: false },
	];

	jsItems.forEach((item) => {
		const kebabName = item.name.toLowerCase().replace(/\s+/g, '-');
		item.path = `/js/day-${item.day}-${kebabName}`;
	});

	cssItems.forEach((item) => {
		const kebabName = item.name.toLowerCase().replace(/\s+/g, '-');
		item.path = `/css/day-${item.day}-${kebabName}`;
	});

	return {
		js: {
			title: 'JavaScript',
			key: 'js',
			component: () => <FeaturePage featureKey="js" />,
			items: jsItems,
		},
		css: {
			title: 'CSS',
			key: 'css',
			component: () => <FeaturePage featureKey="css" />,
			items: cssItems,
		},
	};
};

export const featuresCfg = buildFeatureConfig();
