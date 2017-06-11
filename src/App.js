import React, { Component } from 'react'
import './App.css'
import { Jumbotron, Table, Button } from 'react-bootstrap'
import FeatureTable from './FeatureTable'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      // products: [{'name': 'stuff', 'url': 'example.com', 'price': '$50'}, {'name': 'things', 'url': ''}],
      products: [],
      productInput: false,
      currentInput: ''
    }
    this.handleNewProductButton = this.handleNewProductButton.bind(this)
    this.handleNewProductInputChange = this.handleNewProductInputChange.bind(this)
    this.handleNewProductInputSave = this.handleNewProductInputSave.bind(this)
  }
  handleNewProductButton (e) {
    this.setState({
      productInput: true
    })
    console.log(this.state.products)
  }

  handleNewProductInputChange (e) {
    this.setState({
      currentInput: e.target.value
    })
  }

  handleNewProductInputSave (e) {
    // when state.products is an array of objects:
    let newProducts = this.state.products.map((x) => Object.assign({}, x))
    // let newProducts = this.state.products.map((x) => x)
    newProducts.push({'name': this.state.currentInput, 'url': '', 'price': ''})
    this.setState({
      products: newProducts,
      productInput: false,
      currentInput: ''
    })
  }

  render () {
    let productField = <td><Button id='product-button' onClick={this.handleNewProductButton}>Add a Product</Button></td>
    if (this.state.productInput) {
      productField = <td><input
        id='new-product-input'
        onChange={this.handleNewProductInputChange}
        placeholder='Product name'
        value={this.state.currentInput}
        />
        <Button
          id='save-button'
          onClick={this.handleNewProductInputSave}
        >save</Button></td>
    }

    return (
      <div className='App'>
        <Jumbotron><h2>FeatureCompare.com</h2></Jumbotron>
        <Table bordered condensed hover>
          <thead>
            <tr id='new-feature-row'>
              <td />
              <td />
              <td className='weak'>link</td>
              <td className='weak'>price</td>
              <td>
                <Button>Add a feature</Button>
              </td>
            </tr>
          </thead>
          <FeatureTable
            products={this.state.products}
          />
          <tfoot>
            <tr id='new-product-row'>
              <td />
              {productField}
              <td />
              <td />
              <td />
            </tr>
          </tfoot>

        </Table>
      </div>
    )
  }
}

export default App
