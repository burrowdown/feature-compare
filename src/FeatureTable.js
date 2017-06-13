import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProductRow from './ProductRow'
import FeatureRow from './FeatureRow'

export default class FeatureTable extends Component {
  render () {
    // let rows = []
    const rows = this.props.products.map((productRow) => {
      return (<ProductRow productRow={productRow} features={this.props.features} />)
    })

    return (
      <tbody>
        <FeatureRow features={this.props.features} />
        {rows}
      </tbody>
    )
  }
}

FeatureTable.propTypes = {
  products: PropTypes.array,
  features: PropTypes.array
}
