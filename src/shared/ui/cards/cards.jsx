import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// import { Card } from '../card';
import { dashed } from '../../utils/dashed.js';
import classes from './cards.module.css';

export const Cards = ({ paths }) => {
	let location = useLocation();

	return (
		<div className={classes.cards}>
			{paths.map(({ name, isAble }, i) => {
				const pathName = dashed(name);

				return (
					<div className={classes.card} key={name + i}>
						{isAble ? (
							<Link
								to={`${location.pathname.endsWith('/') ? '' : location.pathname}/${pathName}`}
								className={classes.link}
							>
								{name}
							</Link>
						) : (
							<span className={`${classes.link} ${classes.disabled}`}>
								{name}
							</span>
						)}
					</div>
				);
			})}
		</div>
	);
};
