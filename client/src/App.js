import React, { Component } from 'react';
import Sidebar from './sidebar/Sidebar'
import { Posts, About, Contact } from './pages'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.css';

class App extends Component {
  state = { users: [] }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <Router>
        <div className="container app">
          <div className="row">
            <div className={`col-xs-3`}>
              <Sidebar />
            </div>
            <div className={`col-xs-9 page-body`}>
              <Route exact path="/" component={Posts} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </div>
          </div>
        </div>
      </Router >
    );
  }
}

export default App;