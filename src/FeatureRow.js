import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

export default class FeatureRow extends Component {
  constructor (props) {
    super(props)
    this.state = {
      featureInput: false
    }
    this.handleNewFeatureButton = this.handleNewFeatureButton.bind(this)
    this.handleNewFeatureCancel = this.handleNewFeatureCancel.bind(this)
    this.newFeatureSave = this.newFeatureSave.bind(this)
  }

  handleNewFeatureButton (e) {
    this.setState({
      featureInput: true
    })
  }

  newFeatureSave (e) {
    this.props.onNewFeatureSave()
    this.setState({
      featureInput: false
    })
  }

  handleNewFeatureCancel (e) {
    this.setState({
      featureInput: false
    })
  }

  render () {
    const cols = this.props.features.map((feature) => {
      return (<td>{feature.name}</td>)
    })
    let featureField
    if (this.state.featureInput) {
      featureField = <td><input
        id='new-feature-input'
        onChange={this.props.onNewFeatureInputChange}
        placeholder='Feature'
        value={this.state.currentInput}
      />
        <Button
          id='feature-save-button'
          bsSize='xsmall'
          onClick={this.newFeatureSave}
        >save</Button>
        <Button
          id='feature-cancel-button'
          bsSize='xsmall'
          onClick={this.handleNewFeatureCancel}
        >cancel</Button>
      </td>
    } else {
      featureField = <td><Button
        id='new-feature-button'
        onClick={this.handleNewFeatureButton}
      >Add a feature</Button></td>
    }
    const weights = this.props.features.map((feature) => {
      return (<td>{feature.weight}</td>)
    })

    return (
      <thead>
        <tr id='new-feature-row'>
          <td rowSpan={2} colSpan={2} />
          <td rowSpan={2} className='weak'>link</td>
          <td rowSpan={2} className='weak'>price</td>
          {cols}
          {featureField}
        </tr>
        <tr id='weight-row'>
          {weights}
          <td><Button
            id='edit-weight-button'
            bsSize='xsmall'>edit points</Button></td>
        </tr>
      </thead>
    )
  }
}

FeatureRow.propTypes = {
  features: PropTypes.array,
  onNewFeatureSave: PropTypes.func,
  onNewFeatureInputChange: PropTypes.func
}
