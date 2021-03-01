import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";



function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <AppRouter/>
        </div>
    </BrowserRouter>
  );
}

export default App;
