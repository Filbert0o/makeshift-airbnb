import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Layout from "./components/Layout"


class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
    return(
      <Router history={browserHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Layout}/>
        </Route>


      </Router>
    )
  }
}

export default App;
