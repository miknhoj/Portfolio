import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default class Projects extends Component {
  render() {
    return (
      <div>
        <Card.Group>
          <Card>            
            <Image src='/images/avatar/large/daniel.jpg' onClick={()=> window.open("https://awesome-gates-834535.netlify.com/", "_blank")}/>
            <Card.Content>
              <Card.Header>Project 1</Card.Header>
              <Card.Meta>Joined in 2016</Card.Meta>
              <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                10 Friends
      </a>
            </Card.Content>
          </Card>
          <Card>
            <Image src='/images/avatar/large/daniel.jpg' onClick={()=> window.open("https://infinite-crag-33348.herokuapp.com/", "_blank")}/>
            <Card.Content>
              <Card.Header>Project 2</Card.Header>
              <Card.Meta>Joined in 2016</Card.Meta>
              <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                10 Friends
      </a>
            </Card.Content>
          </Card>
          <Card>
            <Image src='/images/avatar/large/daniel.jpg' onClick={()=> window.open("https://cigar-log.herokuapp.com/", "_blank")}/>
            <Card.Content>
              <Card.Header>Project 3</Card.Header>
              <Card.Meta>Joined in 2016</Card.Meta>
              <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                10 Friends
      </a>
            </Card.Content>
          </Card>
          <Card>
            <Image src='/images/avatar/large/daniel.jpg' onClick={()=> window.open("https://costanza-go.herokuapp.com/", "_blank")}/>
            <Card.Content>
              <Card.Header>Project 4</Card.Header>
              <Card.Meta>Joined in 2016</Card.Meta>
              <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                10 Friends
      </a>
            </Card.Content>
          </Card>Í
        </Card.Group>
      </div>
    )
  }
}
