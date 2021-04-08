import React from 'react';
import classes from './TopNav.module.scss';

const TopNav = () => {
    return (
        <ul className={classes.list}>
            <li className={classes.item}>
                <button className={classes.itemBtn}>О Нас</button>
            </li>

            <li className={classes.item}>
                <button className={classes.itemBtn}>Организациям</button>
            </li>

            <li className={classes.item}>
                <button className={classes.itemBtn}>Контакты</button>
            </li>
            <li className={classes.item}>
                <button className={classes.itemBtn}>Акции</button>
            </li>
        </ul>
    );
};

export default TopNav;