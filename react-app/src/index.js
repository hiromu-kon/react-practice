import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Routing } from "./router/routing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUp } from "./components/pages/SignUp/SignUp";
import { SignIn } from "./components/pages/SignIn/SignIn";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={Routing.top.path} element={<App />}/>
        <Route path={Routing.signUp.path} element={<SignUp/>}/>
        <Route path={Routing.signIn.path} element={<SignIn/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
