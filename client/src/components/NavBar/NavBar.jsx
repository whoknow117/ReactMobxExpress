import React, {useContext} from 'react';
import {Context} from "../../index";
import {Button, Container, Form, FormControl, Nav, Navbar, NavLink} from "react-bootstrap";
import {ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../../utils/consts";
import {observer} from "mobx-react-lite";
import {useHistory} from 'react-router-dom'

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const unAuthMode = () => {
        user.setIsAuth(false)
        history.push(LOGIN_ROUTE)
    }

    const authMode = () => {
        user.setIsAuth(true)
        history.push(LOGIN_ROUTE)
    }
    return (

        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: '#fff'}} to={SHOP_ROUTE}>КупиДевайс</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto">
                        <Button onClick={()=>history.push(ADMIN_ROUTE) }  style={{marginRight: '10px'}}>Админ панель</Button>
                        <Button onClick={unAuthMode} >Выйти</Button>

                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button onClick={authMode}>Авторизация</Button>


                    </Nav>
                }
            </Container>


        </Navbar>

    );
});

export default NavBar;