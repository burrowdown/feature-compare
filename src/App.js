import React, { Component } from 'react'
import './App.css'
import { Jumbotron, Table, Button } from 'react-bootstrap'
import FeatureTable from './FeatureTable'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      // products: ['stuff', 'things'],
      products: [],
      productInput: false,
      currentInput: ''
    }
    this.handleProductButton = this.handleProductButton.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleInputSave = this.handleInputSave.bind(this)
  }
  handleProductButton (e) {
    this.setState({
      productInput: true
    })
  }

  handleInputChange (e) {
    this.setState({
      currentInput: e.target.value
    })
  }

  handleInputSave (e) {
    // when state.products is an array of objects:
    // let newProducts = this.state.products.map((x) => Object.assign({}, x))
    let newProducts = this.state.products.map((x) => x)
    newProducts.push(this.state.currentInput)
    this.setState({
      products: newProducts,
      productInput: false
    })
  }

  render () {
    let productField = <td><Button id='product-button' onClick={this.handleProductButton}>Add a Product</Button></td>
    if (this.state.productInput) {
      productField = <td><input
        id='new-product-input'
        onChange={this.handleInputChange}
        placeholder='Product name'
        value={this.state.currentInput}
        />
        <Button
          id='save-button'
          onClick={this.handleInputSave}
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
            </tr>
          </tfoot>

        </Table>
      </div>
    )
  }
}

export default App
