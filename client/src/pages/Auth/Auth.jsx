import React from 'react';
import {Button, Card, Container, Form, Nav, Row} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../../utils/consts";
import {NavLink, useLocation} from "react-router-dom";


const Auth = () => {

    const location = useLocation()

   const isLogin = location.pathname === LOGIN_ROUTE
    console.log(location)
    return (
        <Container className="d-flex justify-content-center align-items-center"
                   style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: '600px'}} className="p-5">
                <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control

                        className="mt-3"
                        placeholder='Введите свою почту'

                    />
                    <Form.Control
                        className="mt-3"
                        placeholder='Введите свой пароль'
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3  ">
                        {isLogin ?
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}> Зарегестрируйтесь!   </NavLink>
                            </div>
                            :
                            <div>
                                есть аккаунт? <NavLink to={LOGIN_ROUTE}> Войдите!   </NavLink>
                            </div>
                        }
                        <Button
                            className="mt-3"
                            variant={'outline-success'}
                        >
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </Button>
                    </Row>

                </Form>
            </Card>
        </Container>
    );
};

export default Auth;