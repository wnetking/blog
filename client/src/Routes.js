import React from 'react'
import { Posts, About, Contact } from './modules'
import { Route } from 'react-router-dom'

const Routes = (props) => (
  <div className={`col-xs-9 page-body`}>
    <Route exact path="/" render={() => (
      <Posts data={props.data} updateData={props.updateData}/>
    )} />
    <Route path="/about" render={() => (
       <About data={props.data} updateData={props.updateData}/>    
    )} />
    <Route path="/contact" render={() => (
       <Contact data={props.data} updateData={props.updateData}/>    
    )} />
  </div>
)

export default Routes;