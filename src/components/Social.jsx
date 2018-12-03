import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import _ from 'lodash'

const overlayStyle = {
  float: 'left',
  margin: '0em 3em 1em 0em',
}

const fixedOverlayStyle = {
  ...overlayStyle,
  position: 'fixed',
  top: '80px',
  zIndex: 10,
}

const overlayMenuStyle = {
  position: 'relative',
  left: 0,
  transition: 'left 0.5s ease',
}

const fixedOverlayMenuStyle = {
  ...overlayMenuStyle,
  left: '800px',
}

export default class Social extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false,
  }

  handleOverlayRef = (c) => {
    const { overlayRect } = this.state

    if (!overlayRect) {
      this.setState({ overlayRect: _.pick(c.getBoundingClientRect(), 'height', 'width') })
    }
  }

  stickOverlay = () => this.setState({ overlayFixed: true })

  stickTopMenu = () => this.setState({ menuFixed: true })

  unStickOverlay = () => this.setState({ overlayFixed: false })

  unStickTopMenu = () => this.setState({ menuFixed: false })

  render() {
    const { overlayFixed } = this.state

    return (
      <div ref={this.handleOverlayRef} style={overlayFixed ? fixedOverlayStyle : overlayStyle}>
        <Menu
          icon='labeled'
          style={overlayFixed ? fixedOverlayMenuStyle : overlayMenuStyle}
          vertical
        >
          <Menu.Item>
            <Icon name='twitter' />
            Twitter
        </Menu.Item>

          <Menu.Item>
            <Icon name='facebook' />
            Share
        </Menu.Item>

          <Menu.Item>
            <Icon name='mail' />
            Email
        </Menu.Item>
        </Menu>
      </div>
    )
  }
}
