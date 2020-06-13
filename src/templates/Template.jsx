import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from '../routes';

export default (props) => {
    const renderRoutes = () => {
        const list = [];
        routes.forEach((route, key) => {
            return list.push(
                <Route
                    key={key}
                    exact={route.isExact}
                    path={route.path}
                    component={route.component} />
            );
        });
        return list;
    }
    return (
        <div>
            <Router>
                <Switch>
                    {renderRoutes()}
                </Switch>
            </Router>
        </div>
    );
}