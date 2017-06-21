import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Cell extends Component {
  constructor (props) {
    super(props)
    this.state = {
      display: 'blank',
      css: 'cell-display-blank'
    }
    this.handleCellClick = this.handleCellClick.bind(this)
  }

  handleCellClick () {
    let newDisplay, points, newCss
    let weight = this.props.featureWeight

    if (this.state.display === 'green') {
      newDisplay = 'red'
      newCss = 'cell-display-green'
      points = weight
    } else if (this.state.display === 'red') {
      newDisplay = 'blank'
      newCss = 'cell-display-red'
      points = weight * -1
    } else if (this.state.display === 'blank') {
      newDisplay = 'green'
      newCss = 'cell-display-blank'
      points = 0
    }
    this.setState({display: newDisplay, css: newCss})
    this.props.onPointsUpdate(points)
  }

  render () {
    return (
      <td onClick={this.handleCellClick} className={this.state.css} />
    )
  }
}

Cell.propTypes = {
  onPointsUpdate: PropTypes.func,
  featureWeight: PropTypes.number
}
