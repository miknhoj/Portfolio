import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default class Projects extends Component {
  render() {
    return (
      <div>
        <Card.Group centered>
          <Card>            
            <Image src='/images/jeopardy.png' onClick={()=> window.open("https://awesome-gates-834535.netlify.com/", "_blank")}/>
            <Card.Content>
              <Card.Header>Pokemon Jeopardy</Card.Header>
              <Card.Meta>WDI: Project 1</Card.Meta>
              <Card.Description>Simple Jeopardy game using HMTL5, CSS3 and JQuery.</Card.Description>
            </Card.Content>
            <Card.Content extra>
            <a href="https://github.com/miknhoj/jeopardy">
                <Icon name='github' />
                Link to GitHub Repository
                </a>
            </Card.Content>
          </Card>
          <Card>
            <Image src='/images/dribble.png' onClick={()=> window.open("https://infinite-crag-33348.herokuapp.com/", "_blank")}/>
            <Card.Content>
              <Card.Header>Dribble</Card.Header>
              <Card.Meta>WDI: Project 2</Card.Meta>
              <Card.Description>A fun app demonstrating CRUD functionality and server side rendering utlilizing Express, Handlebars and MongoDB</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a href="https://github.com/miknhoj/dribble">
                <Icon name='github' />
                Link to GitHub Repository
      </a>
            </Card.Content>
          </Card>
          <Card>
            <Image src='/images/cigarlog.png' onClick={()=> window.open("https://cigar-log.herokuapp.com/", "_blank")}/>
            <Card.Content>
              <Card.Header>Cigar.Log</Card.Header>
              <Card.Meta>WDI: Project 3</Card.Meta>
              <Card.Description>A passion project building off of Project 2 - full CRUD functionality and client side rendering with React.</Card.Description>
            </Card.Content>
            <Card.Content extra>
            <a href="https://github.com/miknhoj/cigar.log">
                <Icon name='github' />
                Link to GitHub Repository
      </a>
            </Card.Content>
          </Card>
          <Card>
            <Image src='/images/vagabond.png' onClick={()=> window.open("https://jeclbond.herokuapp.com/", "_blank")}/>
            <Card.Content>
              <Card.Header>Vagabond</Card.Header>
              <Card.Meta>WDI: Project 3.5</Card.Meta>
              <Card.Description>A fun group project incorporating Agile development practices, git branching, pair and mob programming. It was also an insight of working with a client. </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <a href="https://github.com/miknhoj/Vagabond_Project">
                <Icon name='github' />
                Link to GitHub Repository
      </a>
            </Card.Content>
          </Card>
          <Card>
            <Image src='/images/costanza.png' onClick={()=> window.open("https://costanza-go.herokuapp.com/", "_blank")}/>
            <Card.Content>
              <Card.Header>Constanza!</Card.Header>
              <Card.Meta>WDI: Project 4</Card.Meta>
              <Card.Description>A light hearted app demonstrating CRUD functionality using Ruby on Rails and 3rd Party APIs.</Card.Description>
            </Card.Content>
            <Card.Content extra>
            <a href="https://github.com/miknhoj/Constanza">
                <Icon name='github' />
                Link to GitHub Repository
      </a>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    )
  }
}
