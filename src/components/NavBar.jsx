import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu pointing secondary>

        <Menu.Item
          as={Link} to='/'
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name='about'
          href="#about"
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
        >
          About
        </Menu.Item>


        <Menu.Item 
          name='projects'
          href='#projects'
          active={activeItem === 'projects'}
          onClick={this.handleItemClick}
        >
          Projects
        </Menu.Item>

      </Menu>
    )
  }
}
