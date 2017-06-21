import React, { Component } from 'react'
import PropTypes from 'prop-types'

const CELL_LOOKUP = {
  'blank': {display: 'cell-display-blank', next: 'green'},
  'green': {display: 'cell-display-green', next: 'red'},
  'red': {display: 'cell-display-red', next: 'blank'}
}

export default class Cell extends Component {
  constructor (props) {
    super(props)
    this.state = {
      display: 'blank'
    }
    this.handleCellClick = this.handleCellClick.bind(this)
  }

  handleCellClick () {
    let newDisplay = CELL_LOOKUP[this.state.display].next
    this.setState({display: newDisplay})
    let points
    let weight = this.props.featureWeight
    if (newDisplay === 'green') {
      points = weight
    } else if (newDisplay === 'red') {
      points = -1 * weight
    } else {
      points = 0
    }
    this.props.onPointsUpdate(points)
    console.log(weight)
  }

  cellDisplay () {
    return CELL_LOOKUP[this.state.display].display
  }

  render () {
    return (
      <td onClick={this.handleCellClick} className={this.cellDisplay()} />
    )
  }
}

Cell.propTypes = {
  onPointsUpdate: PropTypes.func,
  featureWeight: PropTypes.number
}
