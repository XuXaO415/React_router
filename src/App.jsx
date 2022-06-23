import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Soda from "./Soda";
import Sardines from "./Sardines";
import Chips from "./Chips";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Browser router is used to make sure that the page is not refreshed when you click on a link. */}
      <BrowserRouter>
        {/* Route component is used to render a component when the path matches the current URL. */}
        {/* Props set on Route is used to pass props to the component. */}
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/soda">
          <Soda />
        </Route>
        <Route exact path="/sardines">
          <Sardines />
        </Route>
        <Route exact path="/chips">
          <Chips />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
