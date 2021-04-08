import React, {useContext, useEffect, useState} from 'react';
import classes from './Sum.module.scss';
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";


const Sum = observer(({el,value}) => {

    const [count, setCount] = useState([])
    const {device} = useContext(Context);

    useEffect(() => {


        let getLocal = JSON.parse(localStorage.getItem(`${el.id}`))
        setCount(getLocal)


    },[value])

    let units = JSON.stringify(el)
    let parseUnits = JSON.parse(units)


    return (
        <div className={classes.price}>
            <div className={classes.sum}>
                {el.price}грн
            </div>

            <div className={classes.quantity}>
                {/*{parseUnits.unitId === 1 ? count[el.id] + "шт " + " x " + el.price +"грн": ""}*/}
            </div>
        </div>
    );
});

export default Sum;