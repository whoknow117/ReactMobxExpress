import React, {useContext,} from 'react';
import {Context} from "../../index";
import {Container, Nav, Navbar} from "react-bootstrap";
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../../utils/consts";
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
import Electric from "../../assets/Electric/Electric";


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
        console.log(device.activeBar)
        if (device.activeBar === false) {
            device.setActive(true)
        } else {
            device.setActive(false)
        }
    }

    const admineRoute = () => {
        history.push(ADMIN_ROUTE)

    }


    const shopRoute = () => {
        history.push(SHOP_ROUTE)
    }
    const basketRoute = () => {
        history.push(BASKET_ROUTE)
    }


    return (

        <Navbar className={classes.navbar}>
            <Container className={classes.container}>
                <div className={classes.dflex}>
                    <div onClick={shopRoute}>
                        <NavBarLogo/>

                    </div>
                    <CityAndPhone/>

                </div>
                <div className={classes.bottomBar}>

                    <button className={classes.catalogBtn} onClick={menuActive}>Каталог товаров</button>
                    {device.activeBar ?
                        <div className={classes.typebar}>
                            <TypeBar/>
                        </div> : ""}
                    <Search/>
                    {user.isAuth === true ?
                        <Nav className={classes.btns}>

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
                                </div>
                                <div className={classes.title}>
                                    Корзина
                                </div>
                            </button>


                        </Nav>
                        :
                        <Nav className={classes.btn}>
                            <button onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</button>


                        </Nav>
                    }

                </div>
            </Container>


        </Navbar>

    );
});

export default NavBar;