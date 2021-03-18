import React, {useContext} from 'react';
import {Context} from "../../index";
import {Button, Container, Form, FormControl, Nav, Navbar, NavLink} from "react-bootstrap";
import {ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../../utils/consts";
import {observer} from "mobx-react-lite";
import {useHistory} from 'react-router-dom'
import classes from './NavBar.module.scss';
import NavBarLogo from "./NavBarLogo/NavBarLogo";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()


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
                <div onClick={shopRoute}>
                    <NavBarLogo />
                </div>
                {user.isAuth === true ?
                    <Nav className="ml-auto">
                        <Button onClick={admineRoute}  style={{marginRight: '10px'}}>Админ панель</Button>
                        <Button onClick={() => logOut()} >Выйти</Button>

                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Button>


                    </Nav>
                }
            </Container>


        </Navbar>

    );
});

export default NavBar;