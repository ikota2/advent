import React from 'react';
import { useLocation } from 'react-router-dom';
import { urlToTitle } from '../../utils/urlToTitle.js';

const FeatureName = () => {
	const { pathname } = useLocation();
	const title = urlToTitle(pathname);
	return <h1>{title}</h1>;
};

export default FeatureName;
