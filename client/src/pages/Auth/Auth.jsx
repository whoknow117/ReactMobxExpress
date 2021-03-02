import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form, Nav, Row} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../../utils/consts";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {login, registration} from "../../http/userApi";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";


const Auth = observer(() => {
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [userMail, setUserMail] = useState('')
    const [userPass, setUserPass] = useState('')

    const {user} = useContext(Context)


    const click = async () => {
       try {
           let data;
           if (isLogin) {
               data = await login(userMail,userPass);
           } else {
               const response = await registration(userMail, userPass)
               console.log(response)
           }
           user.setUser(data)
           user.setIsAuth(true)
           history.push(SHOP_ROUTE)
       }
       catch (e) {
            alert(e.response.data.message)
       }
    }

    return (
        <Container className="d-flex justify-content-center align-items-center"
                   style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: '600px'}} className="p-5">
                <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        value={userMail}
                        className="mt-3"
                        placeholder='Введите свою почту'
                        onChange={(e) => setUserMail(e.target.value)}

                    />
                    <Form.Control
                        value={userPass}
                        className="mt-3"
                        type="password"
                        placeholder='Введите свой пароль'
                        onChange={(e) => setUserPass(e.target.value)}
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3  ">
                        {isLogin ?
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}> Зарегестрируйтесь! </NavLink>
                            </div>
                            :
                            <div>
                                есть аккаунт? <NavLink to={LOGIN_ROUTE}> Войдите! </NavLink>
                            </div>
                        }
                        <Button
                            onClick={click}
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
});

export default Auth;