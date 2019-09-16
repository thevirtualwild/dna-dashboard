import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";


import Register from './components/auth/Register';
import Login from './components/auth/Login';


import Accounts from "views/Accounts";
import AdminLayout from "layouts/Admin.jsx";
import AccountProfile from "views/AccountProfile";
import Alerts from "views/Alerts";

//States
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

ReactDOM.render(
  <AuthState>
    <AlertState>
      <BrowserRouter>
        <Alerts/>
        <Switch>

          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route path="/admin" render={props => <AdminLayout {...props} />} />
          <Route path="/admin/dashboard" render={props => <AdminLayout {...props} />} />
          <Route exact path="/admin/account/:id" component={Accounts} />
          <Redirect from="/" to="/admin/dashboard" />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </BrowserRouter>
    </AlertState>
  </AuthState>,
  document.getElementById("root")
);
