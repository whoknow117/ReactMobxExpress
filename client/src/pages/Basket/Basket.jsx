import React, {useContext, useEffect, useState} from 'react';
import classes from './Basket.module.scss';
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import BasketInput from "./BasketInput/BasketInput";
import Sum from "./Sum/Sum";

const Basket = observer(() => {

    const {device} = useContext(Context);

    let newArr =[ ]
    //
    // const [count, setCount] = useState(1)



    const [click,setClick] = useState(false)
    const [sumAllItems,setSumAllItems] = useState([])


    const deleteCallback = (id) => {

        setClick(!click);
        let newCart = device.storageCart.filter( cart => cart.id !== id)
        localStorage.setItem('cart',JSON.stringify(newCart))
        localStorage.removeItem(`${id}`)



    }

    useEffect(() => {



        let updatedBasket = localStorage.getItem('cart')


        if( updatedBasket) {
            device.setStorageCart(JSON.parse(updatedBasket))

        }

    },[device.cartCounter, click ])

    return (
        <div className={classes.basketWrapper}>
            <h1 className={classes.pageTitle}>Корзина заказов</h1>





            {device.storageCart.map(el => {
                let storageCart = JSON.parse(JSON.stringify(device.storageCart))
                let itemQuantity = localStorage.getItem(`${el.id}`)
                let itemQuantityParse
                if(itemQuantity) {
                        itemQuantityParse  =  JSON.parse(itemQuantity)

                }



                let summm;
                if(itemQuantityParse ) {
                   summm =  el.price * (itemQuantityParse[el.id] ? itemQuantityParse[el.id] : 1)
                    console.log(summm)
                    newArr.push(summm)


                }
                console.log(newArr)
                let sumItem = newArr.reduce((acc, cur)=> acc + cur, 0)
                console.log(sumItem)

                return (
                    <div className={classes.basketItem}
                    key={el.id}

                    >


                        <div className={classes.image}>
                            <img src={process.env.REACT_APP_API_URL + el.img} alt=""/>
                        </div>
                        <div className={classes.nameBlock}>
                            <div className={classes.name}>{el.name}</div>
                            <div className={classes.btnWrapper}>
                                <button onClick={() => deleteCallback(el.id)} className={classes.btn}>
                                    delete
                                </button>
                            </div>
                        </div>

                        <BasketInput   el={el}/>




                    </div>
                )
            })}
        </div>
    );
});

export default Basket;