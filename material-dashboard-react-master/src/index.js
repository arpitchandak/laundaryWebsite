 
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";

import "assets/css/material-dashboard-react.css?v=1.9.0";
import Login from "views/Login/Login";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
      
      {localStorage.getItem('adminAuth') == null || localStorage.getItem('adminAuth') == "noAdmin" ?
      (
        <Switch>
          <Route path="/login" component={Login} /> 
          <Redirect from="/" to="/login" />
        </Switch>
      )
      :(<Switch>
          <Route path="/admin" component={Admin} />  
          <Redirect from="/" to="/admin/dashboard" />
        </Switch>
      )
      
    }
  </Router>,
  document.getElementById("root")
);
