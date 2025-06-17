import React from 'react'
import { shallow } from 'enzyme'
import Weight from '../Weight'

/* global it describe expect beforeEach */

describe('Weight', () => {
  let sampleFeature, wrapper, cell
  beforeEach(() => {
    sampleFeature = {'name': 'feature1', 'weight': 123}
    wrapper = shallow(<Weight featureInstance={sampleFeature} />)
    cell = wrapper.find('#feature1')
  })
  it('loads the weight from the featureInstance', () => {
    expect(cell.exists()).toBe(true)
    expect(cell.text()).toBe('123 points')
  })
  describe('when editing a weight', () => {
    it('updates the weightInput state on click', () => {
      expect(wrapper.state('weightInput')).toBe(false)
      expect(wrapper.find('.weight-input').exists()).toBe(false)
      cell.simulate('click')
      expect(wrapper.state('weightInput')).toBe(true)
      expect(wrapper.find('.weight-input').length).toBe(1)
    })
    it('resets the weightInput state on blur', () => {
      cell.simulate('click')
      expect(wrapper.state('weightInput')).toBe(true)
      expect(wrapper.find('input').length).toBe(1)
      cell.simulate('blur')
      expect(wrapper.state('weightInput')).toBe(false)
      expect(wrapper.find('input').length).toBe(0)
    })
  })
})
