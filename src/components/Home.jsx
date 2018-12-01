import React, { Component } from 'react'
import { Container, Divider } from 'semantic-ui-react'
import Background from './shared_components/Background'
import Projects from './Projects';
import Footer from './Footer';
// import NavBar from './NavBar';
// import { Sticky } from 'semantic-ui-react'

export default class Home extends Component {
  state = {}

  handleContextRef = contextRef => this.setState({ contextRef })

  render() {

    return (
      <div>
        <Background />
  
        <Container textAlign='justified'>
          <b>About Me</b>
          <Divider />
          <p id="about">
          I’m a full stack web developer with a love of learning. I enjoy the process of finding a solution to a problem and finding new and creative ways to make something better. Highly coachable; adaptable to change; eager to learn; works well with others; strong communicator; a recovering perfectionist learning to  get out of my comfort zone and to seek discomfort to grow as a person. 
      </p>

          <b>General Assembly WDI Projects</b>
          <Divider />

          <div id="projects">
            <Projects />
          </div>

          <b>Freelance Projects</b>
          
          <Divider />
          <p id="freelance">Coming soon</p>
        </Container>
        <Footer />
      </div>
    )
  }
}
