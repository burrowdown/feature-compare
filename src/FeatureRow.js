import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
import Weight from './Weight'

export default class FeatureRow extends Component {
  constructor (props) {
    super(props)
    this.state = {
      featureInput: false,
      currentNewFeatureInput: ''
    }
    this.handleNewFeatureButton = this.handleNewFeatureButton.bind(this)
    this.handleNewFeatureCancel = this.handleNewFeatureCancel.bind(this)
    this.newFeatureSave = this.newFeatureSave.bind(this)
    this.handleNewFeatureInputChange = this.handleNewFeatureInputChange.bind(this)
  }

  handleNewFeatureButton (e) {
    this.setState({
      featureInput: true
    })
  }

  handleNewFeatureInputChange (e) {
    this.setState({
      currentNewFeatureInput: e.target.value
    })
  }

  newFeatureSave (e) {
    this.props.onNewFeatureSave(this.state.currentNewFeatureInput)
    this.setState({
      featureInput: false,
      currentNewFeatureInput: ''
    })
  }

  handleNewFeatureCancel (e) {
    this.setState({
      featureInput: false
    })
  }

  featureField () {
    if (this.state.featureInput) {
      return <td><input
        id='new-feature-input'
        onChange={this.handleNewFeatureInputChange}
        placeholder='Feature'
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
      return <td><Button
        id='new-feature-button'
        onClick={this.handleNewFeatureButton}
     >Add a feature</Button></td>
    }
  }

  render () {
    const cols = this.props.features.map((feature) => {
      return (<td key={feature.name}>{feature.name}</td>)
    })

    const weights = this.props.features.map((feature) => {
      return (<Weight
        key={feature.name}
        onWeightSave={this.props.onWeightSave}
        featureInstance={feature}
      />)
    })

    return (
      <thead>
        <tr id='new-feature-row'>
          <td rowSpan={2} colSpan={2} />
          <td rowSpan={2} className='weak'>link</td>
          <td rowSpan={2} className='weak'>price</td>
          {cols}
          {this.featureField()}
        </tr>
        <tr id='weight-row'>
          {weights}
          <td />
        </tr>
      </thead>
    )
  }
}

FeatureRow.propTypes = {
  features: PropTypes.array,
  onNewFeatureSave: PropTypes.func,
  onWeightSave: PropTypes.func
}
