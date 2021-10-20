import React from 'react'
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom'
import Login from '../login/Login'
import Platform from '../platform/Platform'
import Home from '../home/Home'
import AuthenticationService, {Token} from "../auth/AuthenticationService";

export default class Routes extends React.Component<any, any> {
    render() {
        return (
            <Router>
                <Switch>
                    <this.PrivateRoute path="/platform">
                        <Platform />
                    </this.PrivateRoute>

                    <Route path="/login">
                        <Login />
                    </Route>

                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        )
    }

    // @ts-ignore
    PrivateRoute({ children, ...rest }) {
        let auth: Token = AuthenticationService.$().currentUser()
        return (
            <Route
                {...rest}
                render={({ location }) =>
                    auth?.auth ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: { from: location },
                            }}
                        />
                    )
                }
            />
        )
    }
}
