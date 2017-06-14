import React, { Component } from 'react'
import './App.css'
import { Jumbotron, Table, Button } from 'react-bootstrap'
import FeatureTable from './FeatureTable'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      features: [],
      // products: [{'name': 'stuff', 'url': 'example.com', 'price': '$50'}, {'name': 'things', 'url': ''}],
      products: [],
      productInput: false,
      currentNewProductInput: '',
      currentNewFeatureInput: ''
    }
    this.handleNewProductButton = this.handleNewProductButton.bind(this)
    this.handleNewProductInputChange = this.handleNewProductInputChange.bind(this)
    this.handleNewProductInputSave = this.handleNewProductInputSave.bind(this)
    this.handleNewProductCancelButton = this.handleNewProductCancelButton.bind(this)
    this.handleNewFeatureSave = this.handleNewFeatureSave.bind(this)
    this.handleNewFeatureInputChange = this.handleNewFeatureInputChange.bind(this)
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

  handleNewProductInputSave () {
    let newProducts = this.state.products.map((x) => Object.assign({}, x))
    newProducts.push({'name': this.state.currentNewProductInput, 'url': '', 'price': ''})
    this.setState({
      products: newProducts,
      productInput: false,
      currentNewProductInput: ''
    })
  }

  handleNewProductCancelButton () {
    this.setState({
      productInput: false,
      currentNewProductInput: ''
    })
  }
  handleNewFeatureInputChange (e) {
    this.setState({
      currentNewFeatureInput: e.target.value
    })
  }
  handleNewFeatureSave () {
    let newFeatures = this.state.features.map((x) => x)
    if (this.state.currentNewFeatureInput !== '') {
      newFeatures.push(this.state.currentNewFeatureInput)
    }
    this.setState({
      features: newFeatures,
      currentNewFeatureInput: ''
    })
  }

  render () {
    let productField = <td><Button id='product-button' onClick={this.handleNewProductButton}>Add a Product</Button></td>
    if (this.state.productInput) {
      productField = <td><input
        id='new-product-input'
        onChange={this.handleNewProductInputChange}
        placeholder='Product name'
        value={this.state.currentNewProductInput}
        />
        <Button
          id='save-button'
          onClick={this.handleNewProductInputSave}
        >save</Button>
        <Button
          id='cancel-button'
          onClick={this.handleNewProductCancelButton}
        >cancel</Button>
      </td>
    }

    return (
      <div className='App'>
        <Jumbotron><h2>FeatureCompare.com</h2></Jumbotron>
        <Table bordered condensed hover>
          <FeatureTable
            products={this.state.products}
            features={this.state.features}
            onNewFeatureSave={this.handleNewFeatureSave}
            onNewFeatureInputChange={this.handleNewFeatureInputChange}
          />
          <tfoot>
            <tr id='new-product-row'>
              <td />
              {productField}
              <td colSpan={this.state.features.length + 3} />
            </tr>
          </tfoot>

        </Table>
      </div>
    )
  }
}

export default App
