import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Sidebar } from './modules'
import { pageDataAction } from './store/actions'
import Routes from './Routes'

import { BrowserRouter as Router } from 'react-router-dom'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container app">
          <div className="row">
            <div className={`col-xs-3`}>
              <Sidebar />
            </div>
            <Routes />
          </div>
        </div>
      </Router >
    );
  }
}

// export default App;

function mapStateToProps(state) {
  return {
    pageData: state.pageData,

  }
}
function mapDispatchToProps(dispatch) {
  return {
    pageDataAction: bindActionCreators(pageDataAction, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)