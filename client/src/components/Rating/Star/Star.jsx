import React from 'react';
import classes from  './Star.module.scss';
import StarIcon from "../../../assets/StarIcon/StarIcon";






const Star = ({onClick,value, selected}) => {

    const changeStatusCallback = () => {onClick(value)}

    return <div onClick={changeStatusCallback}  className={`${classes.common} ${selected ? classes.active : ""}`}>

        <StarIcon/>
    </div>
}

export default Star;