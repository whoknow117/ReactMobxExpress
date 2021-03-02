import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";
import NavBar from "./components/NavBar/NavBar";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <NavBar/>
            <AppRouter/>
        </div>
    </BrowserRouter>
  );
}

export default App;
