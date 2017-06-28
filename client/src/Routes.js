import React from 'react'
import { Posts, About, Contact } from './modules'
import { Route } from 'react-router-dom'

const Routes = (props) => (
  <div className={`col-xs-9 page-body`}>
    <Route exact path="/" component={Posts} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
  </div>
)

export default Routes;