import React, {useContext} from 'react';
import {Context} from "../../index";
import {Button, Container, Form, FormControl, Nav, Navbar, NavLink} from "react-bootstrap";
import {SHOP_ROUTE} from "../../utils/consts";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)

    return (

        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: '#fff'}} to={SHOP_ROUTE}>КупиДевайс</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto">
                        <Button style={{marginRight: '10px'}}>Админ панель</Button>
                        <Button>Выйти</Button>

                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button onClick={() => user.setIsAuth(true) }>Авторизация</Button>


                    </Nav>
                }
            </Container>


        </Navbar>

    );
});

export default NavBar;