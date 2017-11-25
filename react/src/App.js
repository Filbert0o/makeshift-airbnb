import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Layout from "./components/Layout"
import NavBar from "./components/NavBar"
import GooglePlaces from "./containers/GooglePlaces"
import HostFormContainer from "./containers/HostFormContainer"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
    return(
      <Router history={browserHistory}>
        <Route path='/' component={NavBar}>
          <IndexRoute component={GooglePlaces}/>
          <Route path='/host' component={HostFormContainer}/>
        </Route>
      </Router>
    )
  }
}

export default App;
