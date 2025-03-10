import React from 'react';
import classes from './layout.module.css';
export const Layout = ({ children }) => {
	return (
		<div className={classes.parent}>
			<header>hello header</header>
			<div className={classes.leftSidebar}>hello left sidebar</div>
			<main>{children}</main>
			<div className={classes.rightSidebar}>
				I am right sidebar and I am having more text
			</div>
			<footer>hello footer</footer>
		</div>
	);
};
