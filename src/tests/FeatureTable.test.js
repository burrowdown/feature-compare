import React from 'react'
import { mount } from 'enzyme'
import FeatureTable from '../FeatureTable.js'

/* global it describe expect  */

describe('when loading with a "products" array', () => {
  let testArray = [{'name': 1}, {'name': 2}]
  let wrapper = mount(
    <FeatureTable
      products={testArray}
    />
  )
  it('renders a row for each item in the array', () => {
    expect(wrapper.find('.product-row').length).toBe(2)
  })
})
