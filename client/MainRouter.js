import React from 'react';
import {Router, Switch} from 'react-router';
import Home from './core/Home'
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();
const MainRouter =()=>{
  return(
      <div>
        <Switch>
          <Router exact path="/" component={Home} history={customHistory}/>
        </Switch>
      </div>
  )
}

export default MainRouter
