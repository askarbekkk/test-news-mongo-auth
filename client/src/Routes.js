import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import App from "./App";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Private from "./pages/Private";
import Admin from "./pages/Admin";
import PrivateRoute from "./components/PrivatRoute";
import AdminRoute from "./components/AdminRoute";


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route exact path='/signup' component={Signup}/>
                <Route exact path='/signin' component={Signin}/>
                <PrivateRoute exact path='/private' component={Private}/>
                <AdminRoute exact path='/admin' component={Admin}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;