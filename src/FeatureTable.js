import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'

export default class FeatureTable extends Component {
  render () {
    let rows = []
    this.props.products.forEach((productRow) => {
      rows.push(
        <tr className='product-row'>
          <td><Button>edit</Button></td>
          <td>{productRow}</td>
          <td />
        </tr>
      )
    })
    return (
      <tbody>{rows}</tbody>
    )
  }
}

FeatureTable.propTypes = {
  products: PropTypes.array
}
