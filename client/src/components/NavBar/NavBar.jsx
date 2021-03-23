import React, {useContext, useState} from 'react';
import {Context} from "../../index";
import {Button, Container, Form, FormControl, Nav, Navbar, NavLink} from "react-bootstrap";
import {ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../../utils/consts";
import {observer} from "mobx-react-lite";
import {useHistory} from 'react-router-dom'
import classes from './NavBar.module.scss';
import NavBarLogo from "./NavBarLogo/NavBarLogo";
import AdminIcon from "../../assets/Admin/AdminIcon";
import Exit from "../../assets/Exit/Exit";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()
    const [mode,setMode] = useState(false);

    const {device} = useContext(Context)

    const logOut = () => {
        localStorage.removeItem('token')
        user.setUser(false)
        user.setIsAuth(false)
        history.push(SHOP_ROUTE)

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
                    </div>
                <div className={classes.bottomBar}>

                        <button onClick={() => device.setActive(true)}>Каталог товаров</button>
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