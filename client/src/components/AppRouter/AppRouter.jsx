import React, {useContext} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {authRoutes, publicRoutes} from "../../routes";
import classes from './AppRouter.module.scss'
import {Context} from "../../index";
import {SHOP_ROUTE} from "../../utils/consts";




const AppRouter = () => {

    const {user} = useContext(Context)
    const isAuth = false
    console.log(user)
    return (
        <div className={classes.wrapper}>
            <Switch>
                {isAuth && authRoutes.map( (el) => {
                    return <Route key={el.path} path={el.path} component={el.Component} exact/>
                })}
                {publicRoutes.map( (el) => {
                    return <Route key={el.path} path={el.path} component={el.Component} exact/>
                })}
                <Redirect to={SHOP_ROUTE}/>
            </Switch>
        </div>
    );
};

export default AppRouter;