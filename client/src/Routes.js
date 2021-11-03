import React, {useEffect} from 'react';
import {Router, Route, Switch} from "react-router-dom";
import App from "./App";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Private from "./pages/Private";
import Admin from "./pages/Admin";
import PrivateRoute from "./components/PrivatRoute";
import AdminRoute from "./components/AdminRoute";
import News from "./pages/News";
import AddNews from "./pages/AddNews";
import UserPage from "./pages/UserPage";
import NewsDetails from "./pages/NewsDetails";
import {history} from "./lib/history";
import {useDispatch} from "react-redux";
import {authUser} from "./redux/actions/userActions";


const Routes = () => {

    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(authUser())
    },[])

    return (
        <Router history={history}>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route exact path='/signup' component={Signup}/>
                <Route exact path='/signin' component={Signin}/>
                <Route exact path='/news' component={News}/>
                <Route exact path='/news_details/:id' component={NewsDetails}/>
                <Route exact path='/user/:id' component={UserPage}/>
                <PrivateRoute exact path='/add_news' component={AddNews}/>
                <PrivateRoute exact path='/private' component={Private}/>
                <AdminRoute exact path='/admin' component={Admin}/>
            </Switch>
        </Router>
    );
};

export default Routes;