import {Redirect, Route} from "react-router-dom";
import {isAuth} from "../../lib/helpers";

function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAuth() ? (
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

export default PrivateRoute