import React, { Component } from 'react'
import { Segment, Container, Grid, List, Header } from 'semantic-ui-react'


export default class Footer extends Component {
  render() {
    return (
      <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Connect' />
              <List link inverted>
                <List.Item as='a' href='https://github.com/miknhoj?tab=repositories'>GitHub</List.Item>
                <List.Item as='a' href='mailto:kimjohan86@gmail.com'>Email</List.Item>
                <List.Item as='a' href='https://www.linkedin.com/in/john-kim-atl/'>LinkedIn</List.Item>
                <List.Item as='a'>Resume</List.Item>
              </List>
            </Grid.Column>
            {/* <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Banana</List.Item>
                <List.Item as='a'>Banana</List.Item>
                <List.Item as='a'>Banana</List.Item>
                <List.Item as='a'>Banana</List.Item>
              </List>
            </Grid.Column> */}
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Banana Header
              </Header>
              <p>
                Extra space for a call to action inside the footer that could help re-engage users.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
    )
  }
}
