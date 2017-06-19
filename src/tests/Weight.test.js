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
    expect(cell.text()).toBe('123')
  })
  describe('when editing a weight', () => {
    it('updates the weightInput state on click', () => {
      expect(wrapper.state('weightInput')).toBe(false)
      expect(wrapper.find('.weight-input').exists()).toBe(false)
      cell.simulate('click')
      expect(wrapper.state('weightInput')).toBe(true)
      expect(wrapper.find('.weight-input').length).toBe(1)
    })
    // TODO: TypeError: this.props.onWeightSave is not a function
    // it('input changes update the featureInstance', () => {
    //   wrapper.setState({'weightInput': true})
    //   wrapper.find('.weight-input').simulate('change', {target: {value: '321'}})
      // expect(wrapper.instance().props.featureInstance.weight).toBe(321)
    // })
    // it('saves a 1 if value is not a positive number on blur', () => {
    //   wrapper.setState({'weightInput': true})
    //   wrapper.find('.weight-input').simulate('change', {target: {value: ''}})
    //   wrapper.find('.weight-input').simulate('blur')
    //   expect(wrapper.instance().props.featureInstance.weight).toBe(1)
    // })
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
