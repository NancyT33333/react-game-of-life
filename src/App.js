import React from 'react';
import Board from "./components/board";
import Panel from "./components/header-panel";
import {Provider} from "react-redux";
import store from "./store";
import Footer from "./components/footer"


import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Panel></Panel>
        <Board></Board>

        <Footer></Footer>
      </div>
    </Provider>
  );
}

export default App;
