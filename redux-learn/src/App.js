import React from "react";
import "./App.css";
// import store from "./store/index"
import { connect } from "react-redux";
import Count from "./components/Count";
import Selector from "./components/Selector";
import Post from './components/Post';


function App({ count, increase, decrease }) {
  return (
    <div className="App">
      <h1>Redux Learn</h1>
      <p>Count: {count}</p>
      <button onClick={increase}>Up</button>
      <button onClick={decrease}>Down</button>
      <Selector />
      <Post />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { count: state.count };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => dispatch({ type: "INCREASE_COUNT" }),
    decrease: () => dispatch({ type: "DECREASE_COUNT" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
