import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProductRow from './ProductRow'
import FeatureRow from './FeatureRow'

export default class FeatureTable extends Component {
  render () {
    const rows = this.props.products.map((productRow) => {
      return (<ProductRow
        productRow={productRow}
        features={this.props.features} />)
    })

    return (
      <tbody>
        <FeatureRow
          features={this.props.features}
          onNewFeatureSave={this.props.onNewFeatureSave}
          onNewFeatureInputChange={this.props.onNewFeatureInputChange}
        />
        {rows}
      </tbody>
    )
  }
}

FeatureTable.propTypes = {
  products: PropTypes.array,
  features: PropTypes.array,
  onNewFeatureSave: PropTypes.func,
  onNewFeatureInputChange: PropTypes.func
}
