import React, {useContext, useEffect, useState} from 'react';
import classes from './Basket.module.scss';
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import BasketInput from "./BasketInput/BasketInput";


import {createBasket} from "../../http/basketApi";
import {useHistory} from "react-router-dom";
import {SHOP_ROUTE} from "../../utils/consts";

const Basket = observer(() => {

    const history = useHistory()

    const {device} = useContext(Context);
    let summm = []
    let allCountsArray = []
    let sumOffAllItems = null;
    let itemQuantityParse;
    let newArr = [];

        const [count, setCount] = useState(0)
        const [value, setValue] = useState("")

    const [countClick,setCountClick] = useState(false)
    const [click, setClick] = useState(false)
    const [allCount, setAllCount] = useState([])
    const [addClick,setAddClick] = useState(false)


    const deleteCallback = (id) => {

        setClick(!click);
        let newCart = device.storageCart.filter(cart => cart.id !== id)
        localStorage.setItem('cart', JSON.stringify(newCart))
        localStorage.removeItem(`${id}`)


    }




    useEffect(() => {
        setCount(device.sum)
        // console.log(JSON.parse(JSON.stringify(device.storageCart)))
        let updatedBasket = localStorage.getItem('cart')
        console.log(allCountsArray)
        setAllCount(allCountsArray)
        if (updatedBasket) {
            device.setStorageCart(JSON.parse(updatedBasket))


        }

    }, [device.cartCounter, click,count,])


    let items = JSON.stringify(device.storageCart)
    let strCounts = JSON.stringify(allCount)
    console.log( JSON.parse(JSON.stringify(device.storageCart)) )


    const addCart = () => {


            let cartItems = JSON.parse(JSON.stringify(device.storageCart))


        createBasket({phone: 92131123,items,strCounts }).then(data => setValue(data))
        localStorage.removeItem('cart')
        cartItems.forEach( el => {
            localStorage.removeItem(`${el.id}`)
        })

        createBasket({phone: 92131123,items,strCounts }).then(data => setValue(data))

        history.push(SHOP_ROUTE)

    }



    return (
        <div className={classes.basketWrapper}>
           <div className={classes.headerCart}>
               <h1 className={classes.pageTitle}>Корзина заказов</h1>
               <h2 className={classes.count}>{count} грн</h2>
           </div>

            {device.storageCart.map(el => {
                let storageCart = JSON.parse(JSON.stringify(device.storageCart))
                let itemQuantity = localStorage.getItem(`${el.id}`)


                if (itemQuantity) {
                    itemQuantityParse = JSON.parse(itemQuantity)

                }


                if (itemQuantityParse) {

                    summm = el.price * (itemQuantityParse[el.id] ? itemQuantityParse[el.id] : 1)



                }
                if (!itemQuantityParse) {

                    summm = el.price * 1



                }
                newArr.push(summm)

                let sumItem = newArr.reduce((acc, cur) => acc + cur, 0)

                device.setSum(sumItem)

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

                        <BasketInput  allCounts={allCountsArray}   countClick={countClick}  setCountClick={setCountClick } setRenderSum={setCount} renderSum={count} el={el}/>


                    </div>
                )
            })}
            <button onClick={addCart}>add </button>
        </div>
    );
});

export default Basket;