import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects';
import { Sticky } from 'semantic-ui-react'

class App extends Component {
  state = {}

  handleContextRef = contextRef => this.setState({ contextRef })

  render() {

    const { contextRef } = this.state
    
    return (
      <Router>
        <div>
          <Sticky context={contextRef}>
            <NavBar />
          </Sticky>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/projects' component={Projects} />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
