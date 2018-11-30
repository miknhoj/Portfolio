import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default class Projects extends Component {
  render() {
    return (
      <div>
        <Card.Group>
          <Card>            
            <Image src='/images/jeopardy.png' onClick={()=> window.open("https://awesome-gates-834535.netlify.com/", "_blank")}/>
            <Card.Content>
              <Card.Header>Project 1</Card.Header>
              <Card.Meta>Joined in 2016</Card.Meta>
              <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
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
              <Card.Header>Project 2</Card.Header>
              <Card.Meta>Joined in 2016</Card.Meta>
              <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
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
              <Card.Header>Project 3</Card.Header>
              <Card.Meta>Joined in 2016</Card.Meta>
              <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
            </Card.Content>
            <Card.Content extra>
            <a href="https://github.com/miknhoj/cigar.log">
                <Icon name='github' />
                Link to GitHub Repository
      </a>
            </Card.Content>
          </Card>
          <Card>
            <Image src='/images/costanza.png' onClick={()=> window.open("https://costanza-go.herokuapp.com/", "_blank")}/>
            <Card.Content>
              <Card.Header>Project 4</Card.Header>
              <Card.Meta>Joined in 2016</Card.Meta>
              <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
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
