import React, { Component } from 'react'
import { Segment, Container, Grid, List, Header, Icon, Modal, Image } from 'semantic-ui-react'


export default class Footer extends Component {
  render() {

    return (
      <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={13}>
                <Header as='h3' inverted>
                  Skills
              </Header>
                <List horizontal >
                  <List.Item><i className="devicon-html5-plain-wordmark"></i></List.Item>
                  <List.Item><i className="devicon-css3-plain-wordmark"></i></List.Item>
                  <List.Item><i className="devicon-javascript-plain"></i></List.Item>
                  <List.Item><i className="devicon-nodejs-plain-wordmark"></i></List.Item>
                  <List.Item><i className="devicon-react-original-wordmark"></i>></List.Item>
                  <List.Item><i className="devicon-mongodb-plain-wordmark"></i></List.Item>
                  <List.Item><i className="devicon-postgresql-plain-wordmark"></i></List.Item>
                  <List.Item><i className="devicon-ruby-plain"></i></List.Item>
                  <List.Item><i className="devicon-rails-plain-wordmark"></i></List.Item>
                  <List.Item><i className="devicon-bootstrap-plain-wordmark"></i></List.Item>
                  <List.Item><i className="devicon-express-original-wordmark"></i></List.Item>
                  <List.Item><i className="devicon-git-plain-wordmark"></i></List.Item>
                  <List.Item><i className="devicon-heroku-original-wordmark"></i></List.Item>
                  <List.Item><i className="devicon-jquery-plain-wordmark"></i></List.Item>
                </List>
              </Grid.Column>

              <Grid.Column width={3}>
                <Header inverted as='h4' content='Connect' />
                <List link inverted >
                  <List.Item as='a' href='https://github.com/miknhoj?tab=repositories'><Icon name='github' />GitHub</List.Item>
                  <List.Item as='a' href='mailto:kimjohan86@gmail.com'><Icon name='mail' />Email</List.Item>
                  <List.Item as='a' href='https://www.linkedin.com/in/john-kim-atl/'><Icon name='linkedin' />LinkedIn</List.Item>

                  <Modal trigger={<List.Item as='a'><Icon name='file alternate outline' />Resume</List.Item>} closeIcon>
                    <Header icon='file alternate outline' content='Resume' />
                    <Modal.Content image>
                      <Image wrapped size='huge' src='./images/Resume_John_Kim.jpg' alt='resume' />
                    </Modal.Content>
                  </Modal>
                  {/* <List.Item as={Link} to='/resume'><Icon name='file alternate outline' />Resume</List.Item> */}
                </List>
              </Grid.Column>


            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    )
  }
}
