import type { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { dashed } from '@/shared/utils/dashed';
import classes from './cards.module.css';

interface CardPath {
  name: string;
  isAble: boolean;
}

interface CardsProps {
  paths: CardPath[];
}

export const Cards: FC<CardsProps> = ({ paths }) => {
  const location = useLocation();

  return (
    <div className={classes.cards}>
      {paths.map(({ name, isAble }) => {
        const pathName = dashed(name);

        return (
          <div className={classes.card} key={name}>
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
