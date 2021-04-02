import React, {useContext, useEffect, useState} from 'react';
import classes from './Basket.module.scss';
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import BasketInput from "./BasketInput/BasketInput";

const Basket = observer(() => {

    const {device} = useContext(Context);



    // const [count, setCount] = useState(1)

    useEffect(() => {
        let updatedBasket = localStorage.getItem('cart')
        if( updatedBasket) {
            device.setStorageCart(JSON.parse(updatedBasket))
        }


    },[device.cartCounter])

    // const incrementCount = () => {
    //
    //     setCount(count + 1)
    //
    // }
    //
    // const decrementCount = () => {
    //     setCount(count - 1)
    // }





    debugger;
    return (
        <div className={classes.basketWrapper}>
            <h1 className={classes.pageTitle}>Корзина заказов</h1>





            {device.storageCart.map(el => {
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
                                <button className={classes.btn}>
                                    delete
                                </button>
                            </div>
                        </div>

                        <BasketInput/>
                        {/*<div className={classes.input}>*/}
                        {/*    <span onClick={decrementCount} className={classes.prev}>  </span>*/}
                        {/*    <span onClick={incrementCount} className={classes.next}> </span>*/}

                        {/*    <div >*/}
                        {/*        <span>{count}</span>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className={classes.price}>
                            <div className={classes.sum}>
                                {el.price}грн
                            </div>
                            <div className={classes.quantity}>

                            </div>
                        </div>


                    </div>
                )
            })}
        </div>
    );
});

export default Basket;