import React from 'react'
import { shallow } from 'enzyme'
import ProductRow from '../ProductRow.js'

/* global it describe expect beforeEach jest */

describe('ProductRow', () => {
  let row, testObject, onSave
  beforeEach(() => {
    testObject = {'name': '1', 'price': '2', 'url': '3'}
    onSave = jest.fn
    row = shallow(
      <ProductRow
        productRow={testObject}
        features={[testObject]}
        onProductEditSave={onSave}
      />)
  })
  describe('when loading a row', () => {
    it('renders price and url into correct columns', () => {
      expect(row.find('#product-name').text()).toBe('1')
      expect(row.find('#product-price').text()).toBe('2')
      expect(row.find('#product-link').text()).toBe('link')
    })
    it('renders one blank cell per feature', () => {
      expect(row.find('Cell').length).toBe(1)
    })
  })
  describe('when editing a row', () => {
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
  })
})
