import React, {useContext, useEffect, useState} from 'react';
import classes from './BasketInput.module.scss';
import {Context} from "../../../index";

import {observer} from "mobx-react-lite";

const BasketInput = observer(({   el,renderSum,setRenderSum,setCountClick,countClick,allCounts   }) => {

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
        setRenderSum(device.sum)
        localName = JSON.parse(localStorage.getItem(`${el.id}`))
        allCounts.push(localName || 1)
        if (localName) {
            setCountArray(localName)
            device.setStorageCounter(localName[el.id])
        }


    }, [count,renderSum  ])

    const incrementCount = () => {
        setCountClick(!countClick)
        setCount(prevCount => prevCount + 1)
        let cart = {}

        cart[el.id] =  (countArray[el.id] ? countArray[el.id] : 1)
        cart[el.id] = cart[el.id] + 1

        localStorage.setItem(`${el.id}`, JSON.stringify(cart))
    }
    const decrementCount = () => {
        setCountClick(!countClick)
        setCount(prevCount => prevCount - 1)
        let cart = {}
        cart[el.id] =  countArray[el.id]
        cart[el.id] = cart[el.id] - 1
        localStorage.setItem(`${el.id}`, JSON.stringify(cart))

    }




        let sum =   el.price * (countArray[el.id] ? countArray[el.id] : 1)

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
            { (countArray[el.id] ? countArray[el.id] : 1) + "шт " + " x " + `${el.price}`+ "грн"  }
        </div>
    </div>
</div>
    );
});

export default BasketInput;