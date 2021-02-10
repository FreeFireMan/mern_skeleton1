import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './core/Home'
import {createBrowserHistory} from "history";

const customHistory = createBrowserHistory();
const MainRouter = () => {

    return (
        <Switch>
            <Route  path="/" component={Home} history={customHistory} exact/>
        </Switch>
    )
}

export default MainRouter
