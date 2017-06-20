import React, { Component } from 'react'
import './App.css'
import { Jumbotron, Table } from 'react-bootstrap'
import FeatureTable from './FeatureTable'
import FeatureRow from './FeatureRow'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      // features: [{'name': 'waterproof', 'weight': 1}],
      features: [],
      // products: [{'name': 'stuff', 'url': 'example.com', 'price': '$50', 'score': 0}, {'name': 'thing', 'url': ''}]
      products: []
    }
    this.handleNewProductSave = this.handleNewProductSave.bind(this)
    this.handleProductEditSave = this.handleProductEditSave.bind(this)
    this.handleNewFeatureSave = this.handleNewFeatureSave.bind(this)
    this.handleWeightSave = this.handleWeightSave.bind(this)
  }

  handleNewProductSave (name) {
    let newProducts = this.state.products.map((x) => Object.assign({}, x))
    if (name !== '') {
      newProducts.push({'name': name, 'url': '', 'price': '', score: 0})
    }
    this.setState({
      products: newProducts
    })
  }

  handleProductEditSave (name, price, link) {
    let newProducts = this.state.products.map((product) => {
      const newProduct = Object.assign({}, product)
      if (newProduct.name === name) {
        newProduct.price = price,
        newProduct.url = link
      }
      return newProduct
    })
    this.setState({
      products: newProducts
    })
  }

  handleNewFeatureSave (newFeatureName) {
    let newFeatures = this.state.features.map((x) => Object.assign({}, x))
    if (newFeatureName !== '') {
      newFeatures.push({'name': newFeatureName, 'weight': 1})
    }
    this.setState({
      features: newFeatures
    })
  }

  handleWeightSave (name, weight) {
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

  render () {
    return (
      <div className='App'>
        <Jumbotron><h2>FeatureCompare.com</h2></Jumbotron>
        <Table bordered condensed hover>
          <FeatureRow
            features={this.state.features}
            onNewFeatureSave={this.handleNewFeatureSave}
            onWeightSave={this.handleWeightSave}
          />
          <FeatureTable
            products={this.state.products}
            features={this.state.features}
            onNewProductSave={this.handleNewProductSave}
            onProductEditSave={this.handleProductEditSave}
          />
        </Table>
      </div>
    )
  }
}

export default App
