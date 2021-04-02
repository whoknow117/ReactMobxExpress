import React, {useContext, useEffect, useState} from 'react';
import classes from './Basket.module.scss';
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const Basket = observer(() => {

    const {device} = useContext(Context);

    const [storageCart, setStorageCart] = useState(device.storageCart)

    useEffect(() => {
        let updatedBasket = localStorage.getItem('cart')
        if( updatedBasket) {
            device.setStorageCart(JSON.parse(updatedBasket))
        }


    },[device.cartCounter])


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
                        <div className={classes.input}>
                            <span className={classes.prev}>  </span>
                            <span className={classes.next}> </span>

                            <div >
                                <span>0</span>
                            </div>
                        </div>
                        <div></div>


                    </div>
                )
            })}
        </div>
    );
});

export default Basket;