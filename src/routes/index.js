import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Landing from '../pages/Landing'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Register" component={Register} />
      <Route exact path="/Dashboard" component={Dashboard} />
    </Switch>
  )
}

export default Routes
