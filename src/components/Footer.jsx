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
                <p>
                  Extra space for a call to action inside the footer that could help re-engage users.
              </p>
              </Grid.Column>

              <Grid.Column width={3}>
                <Header inverted as='h4' content='Connect' />
                <List link inverted >
                  <List.Item as='a' href='https://github.com/miknhoj?tab=repositories'><Icon name='github' />GitHub</List.Item>
                  <List.Item as='a' href='mailto:kimjohan86@gmail.com'><Icon name='mail' />Email</List.Item>
                  <List.Item as='a' href='https://www.linkedin.com/in/john-kim-atl/'><Icon name='linkedin' />LinkedIn</List.Item>

                  <Modal trigger={<List.Item><Icon name='file alternate outline' />Resume</List.Item>} closeIcon>
                    <Header icon='file alternate outline' content='Resume' />
                    <Modal.Content image>
                    <Image wrapped size='fullscreen' src = './images/Resume_John_Kim.jpg' alt='resume'/>
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
