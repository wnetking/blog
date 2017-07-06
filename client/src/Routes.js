import React from 'react'
import {Posts, About, Contact, Post} from './modules'
import {Route} from 'react-router-dom'

const Routes = (props) => (
  <div className={`col-xs-9 page-body`}>
    <Route exact path="/" render={() => (
      <Posts data={props.data} updateData={props.updateData}/>
    )}/>
    <Route path="/about" render={() => (
       <About data={props.data} updateData={props.updateData}/>    
    )}/>
    <Route path="/contact" render={() => (
       <Contact data={props.data} updateData={props.updateData}/>    
    )}/>
    <Route path="/post/:id" render={({ match }) => (
       <Post data={props.data} updateData={props.updateData} id={match.params.id} />
    )}/>
  </div>
)

export default Routes;