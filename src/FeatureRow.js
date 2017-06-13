import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

export default class FeatureRow extends Component {
  constructor (props) {
    super(props)
    this.state = {
      featureInput: false,
      currentInput: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleNewFeatureButton = this.handleNewFeatureButton.bind(this)
    this.handleNewFeatureSave = this.handleNewFeatureSave.bind(this)
    this.handleNewFeatureCancel = this.handleNewFeatureCancel.bind(this)
  }
  handleNewFeatureButton (e) {
    this.setState({
      featureInput: true
    })
  }
  handleInputChange (e) {
    this.setState({
      currentInput: e.target.value
    })
  }
  handleNewFeatureSave (e) {
    // when state.features is an array of objects:
    // let newFeatures = this.props.features.map((x) => Object.assign({}, x))
    // let newFeatures = this.props.features.map((x) => x)
    // newFeatures.push(this.state.currentInput)
    this.props.features.push(this.state.currentInput)
    this.setState({
      featureInput: false,
      currentInput: ''
    })
  }
  handleNewFeatureCancel (e) {
    this.setState({
      featureInput: false,
      currentInput: ''
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
        onChange={this.handleInputChange}
        placeholder='Feature'
        value={this.state.currentInput}
      />
        <Button
          id='feature-save-button'
          onClick={this.handleNewFeatureSave}
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
  features: PropTypes.array
}
