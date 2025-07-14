import React from 'react';
import classes from './layout.module.css';
import { useLocation } from 'react-router-dom';
import BackButton from '../../shared/ui/backButton/backButton.jsx';

export const Layout = ({ children }) => {
	const { pathname } = useLocation();

	return (
		<div className={classes.parent}>
			<header>
				<strong>
					<pre>ADVENT Of CODE 2024</pre>
				</strong>
			</header>
			<div className={classes.leftSidebar}>
				{pathname !== '/' ? <BackButton /> : 'hello left sidebar'}
			</div>
			<main>{children}</main>
			<div className={classes.rightSidebar}>
				I am right sidebar and I am having more text
			</div>
			<footer>
				<strong>
					<pre>с волками жить с волками есть с волками спать</pre>
				</strong>
			</footer>
		</div>
	);
};
