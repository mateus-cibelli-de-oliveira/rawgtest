import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import ViewGame from "../view/ViewGame";
import App from "../App";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route exact path="/" component = { App } />
           <Route path="/viewgame" component = { ViewGame } />
       </BrowserRouter>
   )
}

export default Routes;