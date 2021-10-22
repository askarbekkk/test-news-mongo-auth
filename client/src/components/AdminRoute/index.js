import {Redirect, Route} from "react-router-dom";
import {isAuth} from "../../lib/helpers";

function AdminRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAuth() && isAuth().role === "admin" ? (
                    <Component />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/signin",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default AdminRoute