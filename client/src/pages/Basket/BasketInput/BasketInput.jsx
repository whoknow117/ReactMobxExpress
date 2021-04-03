import React, {useContext, useEffect, useState} from 'react';
import classes from './BasketInput.module.scss';
import {Context} from "../../../index";

import {observer} from "mobx-react-lite";

const BasketInput = observer(({setCount,count,el}) => {

    let localName = `localCount+${el.id}`

    const {device} = useContext(Context)
    let [countArray, setCountArray] = useState([])
    // const [count, setCount] = useState(1)

    useEffect(() => {

        localName = JSON.parse(localStorage.getItem(`${el.id}`))
        if (localName) {
            setCountArray(localName)

        }

    }, [count])


    const incrementCount = () => {
        setCount(count + 1)
        // let dC = JSON.stringify(device.cart)
        // let dC1 = JSON.parse(dC)
        //
        // let copyCart = [...dC1]
        //
        //
        // copyCart.find( c => {
        //     if(c.id === el.id) {
        //         c.quantity = count;
        //         return {...c}
        //
        //     }
        //
        // })
        let cart = {}
        let newArray = []
        cart[el.id] = count

        cart[el.id] = cart[el.id] + 1

        newArray.push(cart)
        localStorage.setItem(`${el.id}`, JSON.stringify(newArray))


    }

    const decrementCount = () => {
        setCount(count - 1)

        let cart = {}
        let newArray = []
        cart[el.id] = count

        cart[el.id] = cart[el.id] - 1

        newArray.push(cart)
        localStorage.setItem(`${el.id}`, JSON.stringify(newArray))

        // let cart = {}
        // cart[el.id] = count
        // let newArray = []
        // cart[el.id] = cart[el.id] - 1
        // let arr = [];
        // if (!cart[el.id]) {
        //     cart[el.id] = count
        //
        //
        // }
        // if (arr) {
        //     cart[el.id] = count
        // }
        //
        // localStorage.setItem(`${el.id}`, JSON.stringify(cart))
    }

    const cA = JSON.stringify(countArray)
    let pA = JSON.parse(cA)

    let counts = pA[0]
    let value = {...counts}



    return (

        <div className={classes.input}>
            <span onClick={decrementCount} className={classes.prev}> </span>
            <span onClick={incrementCount} className={classes.next}> </span>

            <div className={classes.insertField}>
                {value[el.id] || 1}

            </div>
        </div>

    );
});

export default BasketInput;