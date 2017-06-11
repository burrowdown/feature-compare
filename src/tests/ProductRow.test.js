import React from 'react'
// import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import ProductRow from '../ProductRow.js'

/* global it describe expect  */

describe('when loading a row', () => {
  let testObject = {'name': '1', 'price': '3', 'url': '2'}
  let row = shallow(<ProductRow productRow={testObject} />)
  it('renders price and url into correct columns', () => {
    // TODO: I want this to actually look inside the cells, not just check existence
    expect(row.find('#product-name').exists()).toBe(true)
    expect(row.find('#product-price').exists()).toBe(true)
    expect(row.find('#product-link').exists()).toBe(true)
  })
})

describe('when editing a row', () => {
  let testObject = {'name': '1', 'price': '3', 'url': '2'}
  let row = shallow(<ProductRow productRow={testObject} />)
  it('state.isEditable make inputs appear', () => {
    expect(row.find('input').exists()).toBe(false)
    expect(row.find('#edit-button').exists()).toBe(true)
    row.setState({'isEditable': true})
    expect(row.find('input').length).toBe(2)
    expect(row.find('#save-button').exists()).toBe(true)
  })
  it('edit button toggles isEditable', () => {
    row.setState({'isEditable': false})
    row.find('#edit-button').simulate('click')
    expect(row.state('isEditable')).toBe(true)
  })
  it('save button toggles isEditable', () => {
    row.setState({'isEditable': true})
    row.find('#save-button').simulate('click')
    expect(row.state('isEditable')).toBe(false)
  })
  it('updates currentLinkInput and currentPriceInput', () => {
    row.setState({'isEditable': true, 'currentLinkInput': 'not this', 'currentPriceInput': 'definitely wrong'})
    row.find('#link-input').simulate('change', {target: {value: 'foo'}})
    row.find('#price-input').simulate('change', {target: {value: 'bar'}})
    expect(row.state('currentLinkInput')).toBe('foo')
    expect(row.state('currentPriceInput')).toBe('bar')
  })
  // it('save button saves input values to productRow', () => {
  //   row.setState({'isEditable': true, 'currentLinkInput': 'foo', 'currentPriceInput': 'bar'})
  //   // TODO: I want to look at the props here. How?
  // })
})
