import React  from 'react';
import classes from './Rating.module.scss';
import Star from "./Star/Star";






const Rating  = ({onClick, value}) => {



    return <div className={classes.rating}>

        <Star selected={value > 0} onClick={onClick} value={1} />
        <Star selected={value > 1} onClick={onClick} value={2}/>
        <Star selected={value > 2} onClick={onClick} value={3} />
        <Star selected={value > 3} onClick={onClick} value={4} />
        <Star selected={value > 4} onClick={onClick} value={5}/>
    </div>
}

export default Rating;