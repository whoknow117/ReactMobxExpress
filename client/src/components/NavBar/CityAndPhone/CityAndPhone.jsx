import React from 'react';
import classes from './CityAndPhone.module.scss';

const CityAndPhone = () => {
    return (
        <div className={classes.phoneCity}>
            <span className={classes.city}>г.Северодонецк</span>
            <span className={classes.phone}>+38(099)-777-77-77</span>
        </div>
    );
};

export default CityAndPhone;