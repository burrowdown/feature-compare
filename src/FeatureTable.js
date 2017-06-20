import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProductRow from './ProductRow'
import { Button } from 'react-bootstrap'

export default class FeatureTable extends Component {
  constructor (props) {
    super(props)
    this.state = {
      productInput: false,
      currentNewProductInput: ''
    }
    this.handleNewProductButton = this.handleNewProductButton.bind(this)
    this.handleNewProductInputChange = this.handleNewProductInputChange.bind(this)
    this.handleNewProductCancelButton = this.handleNewProductCancelButton.bind(this)
    this.handleNewProductSave = this.handleNewProductSave.bind(this)
  }

  handleNewProductButton () {
    this.setState({
      productInput: true
    })
  }

  handleNewProductInputChange (e) {
    this.setState({
      currentNewProductInput: e.target.value
    })
  }

  handleNewProductCancelButton () {
    this.setState({
      productInput: false,
      currentNewProductInput: ''
    })
  }

  handleNewProductSave () {
    this.props.onNewProductSave(this.state.currentNewProductInput)
    this.setState({
      productInput: false,
      currentNewProductInput: ''
    })
  }

  productField () {
    if (this.state.productInput) {
      return <td><input
        id='new-product-input'
        onChange={this.handleNewProductInputChange}
        placeholder='Product name'
        value={this.state.currentNewProductInput}
      />
        <Button
          id='save-button'
          bsSize='xsmall'
          onClick={this.handleNewProductSave}
        >save</Button>
        <Button
          id='cancel-button'
          bsSize='xsmall'
          onClick={this.handleNewProductCancelButton}
        >cancel</Button>
      </td>
    } else {
      return <td><Button
        id='product-button'
        onClick={this.handleNewProductButton}
        >Add a Product</Button></td>
    }
  }

  render () {
    const rows = this.props.products.map((productRow) => {
      return (<ProductRow
        key={productRow.name}
        productRow={productRow}
        features={this.props.features}
        onProductEditSave={this.props.onProductEditSave}
        />)
    })

    return (
      <tbody>
        {rows}
        <tr id='new-product-row'>
          <td />
          {this.productField()}
          <td colSpan={this.props.features.length + 3} />
        </tr>
      </tbody>
    )
  }
}

FeatureTable.propTypes = {
  products: PropTypes.array,
  features: PropTypes.array,
  onNewProductSave: PropTypes.func,
  onProductEditSave: PropTypes.func
}
