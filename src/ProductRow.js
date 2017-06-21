import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import Cell from './Cell'

export default class ProductRow extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isEditable: false,
      currentLinkInput: '',
      currentPriceInput: '',
      points: 0
    }
    this.handleProductSave = this.handleProductSave.bind(this)
    this.handleProductEdit = this.handleProductEdit.bind(this)
    this.handleLinkInputChange = this.handleLinkInputChange.bind(this)
    this.handlePriceInputChange = this.handlePriceInputChange.bind(this)
    this.handlePointsUpdate = this.handlePointsUpdate.bind(this)
  }

  handleProductEdit (e) {
    this.setState({
      isEditable: true
    })
  }

  handleProductSave (e) {
    this.props.onProductEditSave(this.props.productRow.name, this.state.currentPriceInput, this.state.currentLinkInput)
    this.setState({
      isEditable: false
    })
  }

  handleLinkInputChange (e) {
    this.setState({
      currentLinkInput: e.target.value
    })
  }

  handlePriceInputChange (e) {
    this.setState({
      currentPriceInput: e.target.value
    })
  }

  handlePointsUpdate (diff) {
    this.setState({
      points: (this.state.points + diff)
    })
  }

  buttons () {
    let link, price, editSave
    if (this.state.isEditable) {
      editSave = <Button
        id='save-button'
        bsSize='xsmall'
        onClick={this.handleProductSave}
      >save</Button>
      price = <input
        id='price-input'
        placeholder='put price here'
        value={this.state.currentPriceInput}
        onChange={this.handlePriceInputChange}
      />
      link = <input
        id='link-input'
        placeholder='put url here'
        value={this.state.currentLinkInput}
        onChange={this.handleLinkInputChange}
      />
    } else {
      editSave = <Button
        id='edit-button'
        bsSize='xsmall'
        onClick={this.handleProductEdit}>edit</Button>
      price = this.props.productRow.price
      if (this.props.productRow.url === '') {
        link = ''
      } else {
        link = <a href={this.props.productRow.url}>link</a>
      }
    }
    return [editSave, price, link]
  }

  render () {
    let [editSave, price, link] = this.buttons()

    const blankCells = this.props.features.map((x) => {
      return (<Cell
        key={x.name}
        featureWeight={x.weight}
        onPointsUpdate={this.handlePointsUpdate}
        />)
    })
    blankCells.push(<td key={'last-one'}>{this.state.points}</td>)

    return (
      <tr className='product-row'>
        <td id='edit-save'>{editSave}</td>
        <td id='product-name'>{this.props.productRow.name}</td>
        <td id='product-link'>{link}</td>
        <td id='product-price'>{price}</td>
        {blankCells}
      </tr>
    )
  }
}

ProductRow.propTypes = {
  productRow: PropTypes.object,
  features: PropTypes.array,
  onProductEditSave: PropTypes.func
}
