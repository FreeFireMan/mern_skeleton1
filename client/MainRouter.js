import React from 'react';
import {Router, Switch} from 'react-router';
import Home from './core/Home'


const MainRouter =()=>{
  return(
      <div>
        <Switch>
          <Router exact path="/" component={Home}/>
        </Switch>
      </div>
  )
}

export default MainRouter
