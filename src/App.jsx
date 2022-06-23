import React, {useState} from "react";
import{NavLink, BrowserRouter} from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Soda from "./Soda";
import "./App.css";

function App() {
  return (
  <div className="App">
    <BrowserRouter>
    <NavBar />
    <Route exact path="/soda" />
    <Soda/>
    </Route>
    <VendingMachine />
    </BrowserRouter>
  </div>
  );
}

export default App;
