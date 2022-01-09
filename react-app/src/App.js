import React, { Component } from 'react';
import './App.css';
import { Link } from "react-router-dom";
import { Routing } from "./router/routing";
import { InputField } from "./components/atoms/InputField/InputField"
import { Button } from "./components/atoms/Button/Button"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to={Routing.signIn.path}>投稿ページ</Link>
        <Button />
        <InputField />
      </div>
    );
  }
}

export default App;
