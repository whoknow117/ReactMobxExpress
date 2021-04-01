import React, {useContext, useEffect, useState} from 'react';
import classes from './BasketButton.module.scss';
import {Context} from "../../index";
import {login} from "../../http/userApi";

const BasketButton = ({product}) => {

    const {device} = useContext(Context)






    let updatedBasket =   localStorage.getItem('basketProduct')
    let uB = JSON.parse(updatedBasket)

    const addProduct = () => {

        const updatedCart = [...uB, product] // продукт - товар, прилетает из пропсов
        device.setCart(updatedCart) // это Action, Mobx сеттер, запихиваем этот массив в стор.
        localStorage.setItem('basketProduct', JSON.stringify(updatedCart)) // Сохраняем в локал сторадж

    }
   // Я захожу в f12 и в локал сторадже криво добавляются товары, то добавляются то нет!
    //Когда перезагружаю страницу, могут пропасть из локал стораджа,
    // или если отсаются то при первом же клике добавить в корзину снова все пропадают.


    let isDisabled = uB.some( el =>  el.id === product.id)
    console.log(product.id)
    console.log(isDisabled)

    return (

        // сравнива id если есть в массиве в локале обьект с таким айди то дизейблим , но нихера не дизейблит :D
        <button disabled={uB.some( el =>  el.id === product.id)} onClick={addProduct}  className={classes.btn}>
            В корзину
        </button>
    );
};

export default BasketButton;