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
      return (<td>{feature}</td>)
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
          onClick={this.newFeatureSave}
        >save</Button>
        <Button
          id='feature-cancel-button'
          onClick={this.handleNewFeatureCancel}
        >cancel</Button>
      </td>
    } else {
      featureField = <td><Button
        id='new-feature-button'
        onClick={this.handleNewFeatureButton}
      >Add a feature</Button></td>
    }

    return (
      <tr id='new-feature-row'>
        <td />
        <td />
        <td className='weak'>link</td>
        <td className='weak'>price</td>
        {cols}
        {featureField}

      </tr>
    )
  }
}

FeatureRow.propTypes = {
  features: PropTypes.array,
  onNewFeatureSave: PropTypes.func,
  onNewFeatureInputChange: PropTypes.func
}
