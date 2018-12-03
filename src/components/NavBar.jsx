import React, { Component } from 'react'
import { Menu, Responsive, Visibility } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
  state = {
    activeItem: 'home',
    fixed: false

  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { activeItem } = this.state

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >

            <Menu fixed={'top'} pointing secondary inverted>

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
        </Visibility>
      </Responsive>
    )
  }
}
