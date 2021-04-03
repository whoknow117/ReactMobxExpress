import React, {useEffect, useState} from 'react';
import classes from './Sum.module.scss';

const Sum = ({el,value}) => {

    const [count, setCount] = useState([])


    useEffect(() => {


        let getLocal = JSON.parse(localStorage.getItem(`${el.id}`))
        setCount(getLocal[0])


    },[value])

    let units = JSON.stringify(el)
    let parseUnits = JSON.parse(units)
    console.log(parseUnits)

    return (
        <div className={classes.price}>
            <div className={classes.sum}>
                {el.price * count[el.id]}грн
            </div>

            <div className={classes.quantity}>
                {parseUnits.unitId === 1 ? count[el.id] + "шт " + " x " + el.price +"грн": ""}
            </div>
        </div>
    );
};

export default Sum;