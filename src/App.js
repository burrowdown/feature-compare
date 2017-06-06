import React, { Component } from 'react'
import './App.css'
import { Jumbotron, Table } from 'react-bootstrap'
import FeatureTable from './FeatureTable'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Jumbotron>FeatureCompare.com</Jumbotron>

        <Table bordered condensed hover>
          <thead>
            <tr id='new-feature-row'>
              <td />
              <td>
                <button>Add a feature</button>
              </td>
            </tr>
          </thead>
          <tbody>
            <FeatureTable />
            <tr id='new-product-row'>
              <td>
                <button>Add a product</button>
              </td>
              <td />
            </tr>
          </tbody>
        </Table>
      </div>
    )
  }
}

export default App
