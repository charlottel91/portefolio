
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Router = ({ routes }) => (
    <Switch>
        {routes && routes.map((route) => <Route path={route.path} />)}
    </Switch>
);

export default Router;