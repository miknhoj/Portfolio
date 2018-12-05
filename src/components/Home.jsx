import React, { Component } from 'react'
import { Container, Divider, Header } from 'semantic-ui-react'
import Background from './shared_components/Background'
import Projects from './Projects';
import Footer from './Footer';
// import styled from "styled-components"
// import Social from './Social';
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
          {/* <Header id="about"> About Me</Header> */}
          {/* <Divider /> */}
          <p>
            I’m a full stack web developer with a love of learning. I enjoy the process of finding a solution to a problem and finding new and creative ways to make something better. Highly coachable; adaptable to change; eager to learn; works well with others; strong communicator; a recovering perfectionist learning to  get out of my comfort zone and to seek discomfort to grow as a person.

            I decided to take this journey to become a web developer a few months ago. I wasn't finding fulfillment in the current career that I had. I wanted a job where I could continue to learn new things and grow as a person. I wanted a career that was challenging and rewarding. At the recommendation of a friend, I started to look into coding. I was hesitant, because I didn't know anything about coding and always thought it was something I couldn't do. I instantly fell in love. I quickly enrolled into the Web Development Immersive at General Assembly. In three short months I learned to become a full stack web development. I know I still have so much more to learn, but I finally found something that I truly enjoy. 
      </p>

          <Header id="projects">General Assembly WDI Projects</Header>
          <Divider />

          <div>
            <Projects />
          </div>

          <Header>Freelance Projects</Header>

          <Divider />
          <p id="freelance">Coming soon</p>
        </Container>
        <Footer />
      </div>
    )
  }
}
