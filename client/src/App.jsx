import React, {useContext, useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";
import NavBar from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userApi";
import {Spinner} from "react-bootstrap";

const App = observer(()  =>{

    const {user} = useContext(Context)
    const [loading,setLoading] = useState(true)




     useEffect(() => {
        setTimeout(() => {
            check().then(data => {
                user.setUser(true)
                user.setIsAuth(true)
            }).finally(() => setLoading(false))
        },1000)
     },[])

    if (loading) {
        return <Spinner animation={'grow'} />
    }
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar/>
                <AppRouter/>
            </div>
        </BrowserRouter>
    );
})

export default App;