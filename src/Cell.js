import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Cell extends Component {
  constructor (props) {
    super(props)
    this.state = {
      display: 'blank'
    }
    this.handleCellClick = this.handleCellClick.bind(this)
  }

  // TODO: Can I combine these two functions? Have an onClick that also returns a class value?

  handleCellClick () {
    let newDisplay
    if (this.state.display === 'blank') {
      newDisplay = 'green'
    } else if (this.state.display === 'green') {
      newDisplay = 'red'
    } else {
      newDisplay = 'blank'
    }
    this.setState({display: newDisplay})
  }

  cellDisplay () {
    if (this.state.display === 'blank') {
      return 'cell-display-blank'
    } else if (this.state.display === 'green') {
      return 'cell-display-green'
    } else {
      return 'cell-display-red'
    }
  }

  render () {
    return (
      <td onClick={this.handleCellClick} className={this.cellDisplay()} />
    )
  }
}

Cell.propTypes = {
  productRow: PropTypes.object
}
