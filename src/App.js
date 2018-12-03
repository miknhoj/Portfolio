import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home';
// import About from './components/About';
// import Projects from './components/Projects'
// import NavBar from './components/NavBar'

class App extends Component {

  render() {

    return (
      <Router>
        <div>

          {/* <NavBar/> */}

          <Switch>
            <Route exact path='/' component={Home} />
            {/* <Route exact path='/about' component={About} />
            <Route exact path='/projects' component={Projects} /> */}

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
