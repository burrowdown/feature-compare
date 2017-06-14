import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProductRow from './ProductRow'

export default class FeatureTable extends Component {
  render () {
    const rows = this.props.products.map((productRow) => {
      return (<ProductRow
        productRow={productRow}
        features={this.props.features} />)
    })

    return (
      <tbody>
        {rows}
      </tbody>
    )
  }
}

FeatureTable.propTypes = {
  products: PropTypes.array,
  features: PropTypes.array
}
