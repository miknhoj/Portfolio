import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>

        <Link to={'/'}><Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>
        </Link>

        <Link to={'/about'}>
          <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick}>
            About
        </Menu.Item>
        </Link>

        <Link to={'/projects'}>
          <Menu.Item
            name='projects'
            active={activeItem === 'projects'}
            onClick={this.handleItemClick}
          >
            Projects
        </Menu.Item>
        </Link>

      </Menu>
    )
  }
}
