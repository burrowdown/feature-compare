import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProductRow from './ProductRow'

export default class FeatureTable extends Component {
  render () {
    let rows = []

    this.props.products.forEach((productRow) => {
      rows.push(<ProductRow productRow={productRow} />)
    })
    return (
      <tbody>{rows}</tbody>
    )
  }
}

FeatureTable.propTypes = {
  products: PropTypes.array
}
