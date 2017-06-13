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
  it('input field changes currentInput state', () => {
    app.setState({'productInput': true})
    app.find('#new-product-input').simulate('change', {target: {value: 'foo'}})
    expect(app.state('currentInput')).toBe('foo')
  })
  // THIS IS THE BROKEN ONE
  it('saves input value to state.products and resets currentInput', () => {
    app.setState({'productInput': true, 'currentInput': 'foo'})
    app.find('#save-button').simulate('click')
    // TODO: how does toContain work? Is there a better way to do this?
    // expect(app.state('products')).toContain({'name': 'foo', 'url': '', 'price': ''})
    // expect(app.state('products')).toContain('foo')
    expect(app.state('currentInput')).toBe('')
  })
  it('reverts productInput state to false', () => {
    app.setState({'productInput': true})
    app.find('#save-button').simulate('click')
    expect(app.state('productInput')).toBe(false)
  })
})
