import React, {useContext, useEffect, useState} from 'react';
import classes from './BasketInput.module.scss';
import {Context} from "../../../index";

import {observer} from "mobx-react-lite";

const BasketInput = observer(({ el}) => {

    let localName = `localCount+${el.id}`

    const {device} = useContext(Context)
    let [countArray, setCountArray] = useState([])
    const [count, setCount] = useState(1)


    const cA = JSON.stringify(countArray)
    let pA;
    if(cA) {
         pA = JSON.parse(cA)
    }
    let counts;
    if(pA) {
        counts = pA
    }
    let value =  counts



    let [val,setVal] = useState(value[el.id])
    useEffect(() => {
        localName = JSON.parse(localStorage.getItem(`${el.id}`))
        if (localName) {
            setCountArray(localName)
            device.setStorageCounter(localName[el.id])
        }
        // console.log(localName[el.id])
        // setCount(localName[el.id])

    }, [count])

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1)
        let cart = {}

        cart[el.id] =  countArray[el.id]
        cart[el.id] = cart[el.id] + 1

        localStorage.setItem(`${el.id}`, JSON.stringify(cart))
    }
    const decrementCount = () => {
        setCount(prevCount => prevCount - 1)
        let cart = {}
        cart[el.id] =  countArray[el.id]
        cart[el.id] = cart[el.id] - 1
        localStorage.setItem(`${el.id}`, JSON.stringify(cart))

    }



    let sum = el.price * countArray[el.id]

    console.log(sum)

    return (
<div>
        <div className={classes.input}>
            <span onClick={decrementCount} className={classes.prev}> </span>
            <span onClick={incrementCount} className={classes.next}> </span>

            <div className={classes.insertField}>
                <input onChange={(e) => setVal(e.target.value)} value={ value[el.id] || 1} type="number"/>

            </div>
        </div>
    <div className={classes.price}>
        <div className={classes.sum}>
                {sum}грн

        </div>

        <div className={classes.quantity}>
            { countArray[el.id] + "шт " + " x " + `${el.price}`+ "грн"  }
        </div>
    </div>
</div>
    );
});

export default BasketInput;