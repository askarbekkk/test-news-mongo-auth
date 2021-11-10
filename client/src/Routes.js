import React, {useEffect, Suspense, lazy} from 'react';
import {Router, Route, Switch} from "react-router-dom";
import App from "./App";
import PrivateRoute from "./components/PrivatRoute";
import AdminRoute from "./components/AdminRoute";
import Spinner from "./components/Spinner";
import {history} from "./lib/history";
import {useDispatch, useSelector} from "react-redux";
import {authUser} from "./redux/actions/userActions";

const Signup = lazy(() => import("./pages/Signup"))
const Signin = lazy(() => import("./pages/Signin"))
const News = lazy(() => import("./pages/News"))
const AddNews = lazy(() => import("./pages/AddNews"))
const UserPage = lazy(() => import("./pages/UserPage"))
const NewsDetails = lazy(() => import("./pages/NewsDetails"))
const Private = lazy(() => import("./pages/Private"))
const Admin = lazy(() => import("./pages/Admin"))


const Routes = () => {
    const {headerLoading} = useSelector(s => s.user)
    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(authUser())
    },[])

    if (headerLoading){
        return <Spinner />
    }
    return (
        <Router history={history}>
           <Suspense fallback={<Spinner />}>
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
           </Suspense>
        </Router>
    );
};

export default Routes;