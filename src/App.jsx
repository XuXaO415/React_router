import React, {useState} from "react";
import{BrowserRouter, Route} from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Soda from "./Soda";
import Sardines from "./Sardines";
import Chips from "./Chips";

import "./App.css";

function App() {
  return (
  <div className="App">
    <BrowserRouter>
    <Route exact path="/" >
    <VendingMachine />
    </Route>
    <Route exact path="/soda" />
    <Soda />
    </Route>
    <BrowserRouter>
    <Route exact path="/sardines" />
    <Sardines />
    </Route>
    <Route exact path="/chips" />
    <Chips/>
    </Route>
    </BrowserRouter>
  </div>
  );
}

export default App;
