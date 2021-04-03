import React, {useContext, useEffect, useState} from 'react';
import classes from './BasketButton.module.scss';
import {Context} from "../../index";
import {login} from "../../http/userApi";
import {observer} from "mobx-react-lite";

const BasketButton = observer(({product}) => {

    const {device} = useContext(Context)



// Вот при таком раскладе я все четко добавляю, при перезагрузке все остается в локалсторадже, но
    //Сам массив device.cart который локальный он же обнуляется
    //И при перезагрузке при первом нажатии на "В корзину" все что было в локалсторадже заменяется
    //новым массивом, а там получается 1 элемент по которому нажали!

        let newArray = []
      useEffect(() => {
          let updatedBasket = localStorage.getItem('cart')

          if( updatedBasket) {
              device.setStorageCart(JSON.parse(updatedBasket))
          }


      },[device.cart])


    const addProduct = () => {

        let updatedCart = [...device.storageCart  ,{...product }] // если вместо device.cart поставить массив из локалстораджа, то при перезагрузке и нажатии
        //продолжит заполнятся локалсторадж, но если мы полностью удалим локал, то при добавлении в пустой массив пишет, что не может
        //итерировать null, я пробовал делать и условия и ||  &&  ? : :D получается замкнутый круг,


        device.setCart(updatedCart)
        let newCart = JSON.stringify(device.cart)
        let parseCart = JSON.parse(newCart)

        localStorage.setItem('cart', JSON.stringify(parseCart))
    }

    let isDisabled = (newArray.some(el => el.id === product.id))

    // debugger
    return (

        // сравнива id если есть в массиве в локале обьект с таким айди то дизейблим , но нихера не дизейблит :D disabled={uB.some( el =>  el.id === product.id)}
        <button disabled={device.storageCart.some(el => el.id === product.id)}   onClick={addProduct}  className={classes.btn}>
            В корзину
        </button>
    );
})  ;

export default BasketButton;