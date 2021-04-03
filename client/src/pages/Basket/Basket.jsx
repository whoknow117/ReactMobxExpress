import React, {useContext, useEffect, useState} from 'react';
import classes from './Basket.module.scss';
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import BasketInput from "./BasketInput/BasketInput";
import Sum from "./Sum/Sum";

const Basket = observer(() => {

    const {device} = useContext(Context);


    //
    // const [count, setCount] = useState(1)

    useEffect(() => {



        let updatedBasket = localStorage.getItem('cart')

        if( updatedBasket) {
            device.setStorageCart(JSON.parse(updatedBasket))
            // console.log( JSON.parse(updatedBasket))
        }

    },[device.cartCounter,device.storageCart ])



    const deleteCallback = (id) => {


        let newCart = device.storageCart.filter( cart => cart.id !== id)
        localStorage.setItem('cart',JSON.stringify(newCart))
        localStorage.removeItem(`${id}`)
        return  console.log(newCart)


    }



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
                                <button onClick={() => deleteCallback(el.id)} className={classes.btn}>
                                    delete
                                </button>
                            </div>
                        </div>

                        <BasketInput el={el}/>


                        {/*<div className={classes.input}>*/}
                        {/*    <span onClick={decrementCount} className={classes.prev}>  </span>*/}
                        {/*    <span onClick={incrementCount} className={classes.next}> </span>*/}

                        {/*    <div >*/}
                        {/*        <span>{count}</span>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className={classes.price}>*/}
                        {/*    <div className={classes.sum}>*/}
                        {/*        {el.price}грн*/}
                        {/*    </div>*/}
                        {/*    <div className={classes.quantity}>*/}

                        {/*    </div>*/}
                        {/*</div>*/}


                    </div>
                )
            })}
        </div>
    );
});

export default Basket;