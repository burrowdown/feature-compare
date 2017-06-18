import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Weight extends Component {
  constructor (props) {
    super(props)
    this.state = {
      weightInput: false
    }
    this.handleWeightEdit = this.handleWeightEdit.bind(this)
    this.handleWeightClick = this.handleWeightClick.bind(this)
    this.hanldeWeightBlur = this.hanldeWeightBlur.bind(this)
  }

  handleWeightEdit (e) {
    const name = this.props.featureInstance.name
    const weight = e.target.value
    this.props.onWeightSave(name, weight)
  }

  handleWeightClick () {
    this.setState({
      weightInput: true
    })
  }

  hanldeWeightBlur () {
    // TODO: integer validation
    if (this.props.featureInstance.weight < 1) {
      this.props.onWeightSave(this.props.featureInstance.name, 1)
    }
    this.setState({
      weightInput: false
    })
  }


  render () {
    let weightBox = this.props.featureInstance.weight
    if (this.state.weightInput) {
      weightBox = <input
        className='weight-input'
        onChange={this.handleWeightEdit}
        value={this.props.featureInstance.weight}
      />
    }
    return (
      <td
        id={this.props.featureInstance.name}
        onClick={this.handleWeightClick}
        onBlur={this.hanldeWeightBlur}
      >{weightBox}</td>
    )
  }
}

Weight.propTypes = {
  onWeightSave: PropTypes.func,
  featureInstance: PropTypes.object,
  // onWeightInputChange: PropTypes.func
}
