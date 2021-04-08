import React, {useContext, useEffect, useState,} from 'react';
import {Context} from "../../index";
import {Container, Nav, Navbar} from "react-bootstrap";
import {ADMIN_ROUTE, BASKET_ROUTE, FAVORITE_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../../utils/consts";
import {observer} from "mobx-react-lite";
import {useHistory} from 'react-router-dom'
import classes from './NavBar.module.scss';
import NavBarLogo from "./NavBarLogo/NavBarLogo";
import AdminIcon from "../../assets/Admin/AdminIcon";
import Exit from "../../assets/Exit/Exit";
import CityAndPhone from "./CityAndPhone/CityAndPhone";
import Search from "./Search/Search";
import TypeBar from "../TypeBar/TypeBar";
import Basket from "../../assets/Basket/Basket";
import TopNav from "./TopNav/TopNav";
import Heart from "../../assets/Heart/Heart";
import User from "../../assets/User/User";


const NavBar = observer(() => {
    const history = useHistory()
    const {user, device} = useContext(Context)


    const logOut = () => {
        localStorage.removeItem('token')
        user.setUser(false)
        user.setIsAuth(false)
        history.push(SHOP_ROUTE)

    }

    const menuActive = () => {

        if (device.activeBar === false) {
            device.setActive(true)
        } else {
            device.setActive(false)
        }
    }

    const [headerCollapsed, setHeaderCollapsed] = useState(false);


    window.addEventListener('scroll', (event) => {
        (window.pageYOffset >= 22 ? setHeaderCollapsed(true) : setHeaderCollapsed(false))

    })

    const admineRoute = () => {
        history.push(ADMIN_ROUTE)

    }

    const favoriteRoute = () => {
        history.push(FAVORITE_ROUTE)
    }

    const checkNull = () => {
        if (device.storageFavorite.length !== 0) {
            history.push(FAVORITE_ROUTE)
        } else {
            alert('Нет избранных товаров!')
        }
    }


    const shopRoute = () => {
        history.push(SHOP_ROUTE)
    }
    const basketRoute = () => {
        history.push(BASKET_ROUTE)
    }
    const [favoriteCount, setFavoriteCount] = useState(null)


    useEffect(() => {


        device.setStorageCounter(favoriteCount)
        let count = localStorage.getItem('basketProduct')
        let favor = JSON.parse(localStorage.getItem('favoriteCounter'))
        setFavoriteCount(favor)

        if (count) {
            let parseCount = JSON.parse(count)
            if (parseCount.count) {
                device.setCartCounter(parseCount.count)
            }
        }
        // device.sum, device.storageCart, favoriteCount
    }, [device.storageFavorite, device.cartCounter, device.storageCounter, ])




    return (

        <div className={classes.navbar}>
            <div className={classes.container}>
                <div className={classes.dflex}>
                    <div onClick={shopRoute}>
                        <NavBarLogo/>
                    </div>
                    <CityAndPhone/>
                    <TopNav/>
                </div>
                <div className={`${classes.bottomBar} ${headerCollapsed ? classes.collapsed : ""}`}>

                    <button onClick={menuActive} className={classes.goodsBtn}><span className={classes.span}></span>Каталог
                        товаров
                    </button>
                    {device.activeBar ?
                        <div className={classes.typebar}>
                            <TypeBar collapse={headerCollapsed}/>
                        </div> : ""}
                    <Search/>
                    {user.isAuth === true ?
                        <div className={classes.btns}>
                            <button className={classes.btn} onClick={checkNull} style={{marginRight: '10px'}}>

                                <div className={classes.icon}>
                                    <Heart/>
                                </div>
                                <div className={classes.title}>
                                    Избранное
                                </div>
                            </button>

                            <button className={classes.btn} onClick={admineRoute} style={{marginRight: '10px'}}>

                                <div className={classes.icon}>
                                    <AdminIcon/>
                                </div>
                                <div className={classes.title}>
                                    Админ панель
                                </div>
                            </button>
                            <button className={classes.btn} onClick={() => logOut()}>
                                <div className={classes.icon}>
                                    <Exit/>
                                </div>
                                <div className={classes.title}>
                                    Выход
                                </div>
                            </button>
                            <button className={classes.btn} onClick={basketRoute}>
                                <div className={classes.icon}>
                                    <Basket/>
                                    <span className={classes.span}>
                                        {device.storageCart && device.storageCart.length || 0}
                                    </span>
                                </div>
                                <div className={classes.title}>
                                    Корзина
                                </div>
                            </button>


                        </div>
                        :
                        <div className={classes.btns}>
                            <button className={classes.btn} onClick={checkNull} style={{marginRight: '10px'}}>

                                <div className={classes.icon}>
                                    <Heart/> <span
                                    className={`${classes.favoriteCounter} ${device.storageFavorite.length === 0 ? classes.notActive : ""}`}>
                                        {favoriteCount && favoriteCount || 0}
                                    </span>
                                </div>
                                <div className={classes.title}>
                                    Избранное
                                </div>
                            </button>
                            <button onClick={() => history.push(LOGIN_ROUTE)}>
                                <div className={classes.icon}>
                                    <User/>
                                </div>
                                <div className={classes.title}>
                                    Войти
                                </div>
                            </button>

                            <button className={classes.btn} onClick={basketRoute}>
                                <div className={classes.icon}>
                                    <Basket/>
                                    <span className={classes.span}>
                                        {device.storageCart && device.storageCart.length || 0}
                                    </span>
                                </div>
                                <div className={classes.title}>
                                    Корзина
                                </div>
                            </button>
                        </div>
                    }

                </div>
            </div>


        </div>

    );
});

export default NavBar;