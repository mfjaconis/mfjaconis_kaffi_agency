import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./Home";
import Sobre from "./Sobre";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { Sobre }  path="/sobre" />
       </BrowserRouter>
   )
}

export default Routes;