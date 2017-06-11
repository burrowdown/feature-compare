import React from 'react'
// import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import App from '../App.js'
// import renderer from 'react-test-renderer'

/* global it describe expect */

describe('App', () => {
  it('renders a feature row and a new product row', () => {
    let app = mount(<App />)
    expect(app.find('#new-feature-row').exists()).toBe(true)
    expect(app.find('#new-product-row').exists()).toBe(true)
  })
})

describe('when adding a new item', () => {
  const app = mount(<App />)
  const productButton = app.find('#product-button')

  it('changes productInput state to true', () => {
    productButton.simulate('click')
    expect(app.state('productInput')).toBe(true)
  })
  it('changes currentInput state', () => {
    app.setState({'productInput': true})
    let input = app.find('#new-product-input')
    input.simulate('change', {target: {value: 'foo'}})
    expect(app.state('currentInput')).toBe('foo')
  })
  it('updates state.products with input value', () => {
    app.setState({'productInput': true})
    let input = app.find('#new-product-input')
    input.simulate('change', {target: {value: 'foo'}})
    const saveButton = app.find('#save-button')
    saveButton.simulate('click')
    expect(app.state('currentInput')).toBe('foo')
  })
  it('reverts productInput state to false', () => {
    app.setState({'productInput': true})
    productButton.simulate('click')
    expect(app.state('productInput')).toBe(true)
  })
})
