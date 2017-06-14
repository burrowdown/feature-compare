import React from 'react'
import { shallow } from 'enzyme'
import App from '../App.js'

/* global it describe expect */

describe('App', () => {
  let app = shallow(<App />)
  it('renders a new product row', () => {
    expect(app.find('#new-product-row').exists()).toBe(true)
  })
})

describe('when adding a new item', () => {
  const app = shallow(<App />)

  it('product button changes productInput state to true', () => {
    app.find('#product-button').simulate('click')
    expect(app.state('productInput')).toBe(true)
  })
  it('input field changes currentNewProductInput state', () => {
    app.setState({'productInput': true})
    app.find('#new-product-input').simulate('change', {target: {value: 'foo'}})
    expect(app.state('currentNewProductInput')).toBe('foo')
  })
  it('saves input value to state.products and resets currentInput', () => {
    app.setState({'productInput': true, 'currentNewProductInput': 'foo'})
    app.find('#save-button').simulate('click')
    expect(app.state('products').pop().name).toBe('foo')
    expect(app.state('currentNewProductInput')).toBe('')
  })
  it('reverts productInput state to false', () => {
    app.setState({'productInput': true})
    app.find('#save-button').simulate('click')
    expect(app.state('productInput')).toBe(false)
  })
  it('cancel reverts productInput state to false', () => {
    app.setState({'productInput': true})
    app.find('#cancel-button').simulate('click')
    expect(app.state('productInput')).toBe(false)
  })
})
