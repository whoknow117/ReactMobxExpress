import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../index";
import {Button, Container, Form, FormControl, Nav, Navbar, NavLink, Row} from "react-bootstrap";
import {ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../../utils/consts";
import {observer} from "mobx-react-lite";
import {useHistory} from 'react-router-dom'
import classes from './NavBar.module.scss';
import NavBarLogo from "./NavBarLogo/NavBarLogo";
import AdminIcon from "../../assets/Admin/AdminIcon";
import Exit from "../../assets/Exit/Exit";
import SearchIcon from "../../assets/SearchIcon/SearchIcon";
import CityAndPhone from "./CityAndPhone/CityAndPhone";
import {fetchCategories, fetchDevices} from "../../http/deviceApi";
import Search from "./Search/Search";
import TypeBar from "../TypeBar/TypeBar";

const NavBar = observer(() => {
    const history = useHistory()
    const {user,device} = useContext(Context)






    const logOut = () => {
        localStorage.removeItem('token')
        user.setUser(false)
        user.setIsAuth(false)
        history.push(SHOP_ROUTE)

    }

    const menuActive = () => {
        console.log(device.activeBar)
        if (device.activeBar === false){
            device.setActive(true)
        }
        else {
            device.setActive(false)
        }
    }

    const admineRoute = () => {
        history.push(ADMIN_ROUTE)

    }


    const shopRoute = () => {history.push(SHOP_ROUTE)}

    return (

        <Navbar className={classes.navbar}>
            <Container className={classes.container}>
               <div className={classes.dflex}>
                   <div onClick={shopRoute}>
                   <NavBarLogo />

               </div>
                   <CityAndPhone/>

                    </div>
                <div className={classes.bottomBar}>

                        <button className={classes.catalogBtn}  onClick={menuActive}>Каталог товаров</button>
                    {device.activeBar ?
                        <div  className={classes.typebar}>
                            <TypeBar/>
                        </div> : ""}
                        <Search/>
                        {user.isAuth === true ?
                            <Nav className={classes.btn}>
                                <button onClick={admineRoute} style={{marginRight: '10px'}}><AdminIcon/></button>
                                <button onClick={() => logOut()} ><Exit/></button>

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