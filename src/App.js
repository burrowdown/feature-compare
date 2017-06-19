import React, { Component } from 'react'
import './App.css'
import { Jumbotron, Table, Button } from 'react-bootstrap'
import FeatureTable from './FeatureTable'
import FeatureRow from './FeatureRow'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      // features: [{'name': 'waterproof', 'weight': 1}],
      features: [],
      // products: [{'name': 'stuff', 'url': 'example.com', 'price': '$50', 'score': 0}, {'name': 'thing', 'url': ''}],
      products: [],
      productInput: false,
      currentNewProductInput: ''
    }
    this.handleNewProductButton = this.handleNewProductButton.bind(this)
    this.handleNewProductInputChange = this.handleNewProductInputChange.bind(this)
    this.handleNewProductInputSave = this.handleNewProductInputSave.bind(this)
    this.handleNewProductCancelButton = this.handleNewProductCancelButton.bind(this)
    this.handleNewFeatureSave = this.handleNewFeatureSave.bind(this)
    this.handleWeightInputSave = this.handleWeightInputSave.bind(this)
  }

  // add products
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
    if (this.state.currentNewProductInput !== '') {
      newProducts.push({'name': this.state.currentNewProductInput, 'url': '', 'price': '', score: 0})
    }
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

  // add features
  handleNewFeatureSave (newFeatureName) {
    let newFeatures = this.state.features.map((x) => Object.assign({}, x))
    if (newFeatureName !== '') {
      newFeatures.push({'name': newFeatureName, 'weight': 1})
    }
    this.setState({
      features: newFeatures
    })
  }

  // edit weights
  handleWeightInputSave (name, weight) {
    let newFeatures = this.state.features.map((feature) => {
      const newFeature = Object.assign({}, feature)
      if (newFeature.name === name) {
        newFeature.weight = weight
      }
      return newFeature
    })
    this.setState({
      features: newFeatures
    })
  }

  // render
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
          onClick={this.handleNewProductInputSave}
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
    return (
      <div className='App'>
        <Jumbotron><h2>FeatureCompare.com</h2></Jumbotron>
        <Table bordered condensed hover>
          <FeatureRow
            features={this.state.features}
            onNewFeatureSave={this.handleNewFeatureSave}
            onWeightSave={this.handleWeightInputSave}
          />
          <FeatureTable
            products={this.state.products}
            features={this.state.features}
          />
          <tfoot>
            <tr id='new-product-row'>
              <td />
              {this.productField()}
              <td colSpan={this.state.features.length + 3} />
            </tr>
          </tfoot>

        </Table>
      </div>
    )
  }
}

export default App
