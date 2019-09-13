import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AccountProfile from './AccountProfile'
import TableList from './TableList'

// The Roster component matches one of two different routes
// depending on the full pathname
const Accounts = () => (
  <Switch>
    <Route exact path='/admin/account' component={TableList}/>
    <Route path='/admin/account/:id' component={AccountProfile}/>
  </Switch>
)


export default Accounts
