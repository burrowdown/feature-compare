import React from 'react'
// import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import App from './App.js'

/* global it describe expect  */

describe('when loading App', () => {
  it('renders a feature row and a new product row', () => {
    let app = mount(<App />)
    expect(app.find('#new-feature-row').exists()).toBe(true)
    expect(app.find('#new-product-row').exists()).toBe(true)
  })
})