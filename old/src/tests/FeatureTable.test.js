import React from 'react'
import { shallow } from 'enzyme'
import FeatureTable from '../FeatureTable'

/* global it describe expect beforeEach jest */

describe('FeatureTable', () => {
  let testArray, table, onSave
  beforeEach(() => {
    onSave = jest.fn
    testArray = [{'name': 1}, {'name': 2}]
    table = shallow(<FeatureTable
      products={testArray}
      features={[]}
      onNewProductSave={onSave}
      />)
  })
  it('renders a new product row and rows for each existing product', () => {
    expect(table.find('#new-product-row').exists()).toBe(true)
    expect(table.find('ProductRow').length).toBe(2)
  })
  describe('when adding a new item', () => {
    it('product button changes productInput state to true', () => {
      table.find('#product-button').simulate('click')
      expect(table.state('productInput')).toBe(true)
    })
    it('input field changes currentNewProductInput state', () => {
      table.setState({'productInput': true})
      table.find('#new-product-input').simulate('change', {target: {value: 'foo'}})
      expect(table.state('currentNewProductInput')).toBe('foo')
    })
    it('reverts productInput state and currentInput', () => {
      table.setState({'productInput': true})
      table.find('#save-button').simulate('click')
      expect(table.state('productInput')).toBe(false)
      expect(table.state('currentNewProductInput')).toBe('')
    })
    it('cancel reverts productInput state to false', () => {
      table.setState({'productInput': true})
      table.find('#cancel-button').simulate('click')
      expect(table.state('productInput')).toBe(false)
    })
  })
})
