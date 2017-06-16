import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Weight extends Component {
  constructor (props) {
    super(props)
    this.state = {
      weightInput: false
    }
    this.handleWeightEdit = this.handleWeightEdit.bind(this)
  }

  handleWeightEdit (e) {
    this.props.onWeightInputChange(this.props.featureInstance.name, e.target.value)
  }

  render () {
    let weightBox = this.props.featureInstance.weight
    if (this.state.weightInput) {
      weightBox = <input
        className='weight-input'
        onChange={this.props.onWeightInputChange}
        value={this.props.featureInstance.weight}
      />
    }
    return (
      <td
        id={this.props.featureInstance.name}
        onClick={this.handleWeightEdit}
        onBlur={this.handleWeightSave}
      >{weightBox}</td>
    )
  }
}

Weight.propTypes = {
  onWeightSave: PropTypes.func,
  featureInstance: PropTypes.object,
  onWeightInputChange: PropTypes.func
}
