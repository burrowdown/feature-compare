import React from 'react'
import { shallow } from 'enzyme'
import FeatureRow from '../FeatureRow'

/* global it describe expect beforeEach jest */

describe('FeatureRow', () => {
  let row = shallow(<FeatureRow features={[]} />)
  it('loads the right number of cells', () => {
    expect(row.find('td').length).toBe(5)
  })
})

describe('when adding a feature', () => {
  let onSave, onChange

  beforeEach(() => {
    onSave = jest.fn
    onChange = jest.fn
  })
  let row = shallow(<FeatureRow
    features={[]}
    onSave={onSave}
    onChange={onChange}
  />)
  describe('the "add feature" button', () => {
    let button = row.find('#new-feature-button')
    beforeEach(() => {
      button.simulate('click')
    })
    it('renders an input field and save and edit buttons', () => {
      expect(row.find('#new-feature-input').exists()).toBe(true)
      expect(row.find('#feature-cancel-button').exists()).toBe(true)
      expect(row.find('#feature-save-button').exists()).toBe(true)
      expect(row.find('#new-feature-button').exists()).toBe(false)
    })
    it('toggles state.featureInput', () => {
      expect(row.state('featureInput')).toBe(true)
    })
  })
  // TODO: none of these work, something about the handlers not being functions
  // describe('the save button', () => {
  //   let button = row.find('#new-feature-button')
  //   beforeEach(() => {
  //     button.simulate('click')
  //   })
  //   it('sets featureInput to false', () => {
  //     let save = row.find('#feature-save-button')
  //     save.simulate('click') // is not a function????
  //     expect(onNewFeatureSave).toBeCalled()
  //     expect(row.state('featureInput')).toBe(false)
  //   })
  // })
  // describe('the cancel button', () => {
  //   beforeEach(() => {
  //     this.setState({
  //       featureInput: true
  //     })
  //     row.find('#feature-cancel-button').simulate('click')
  //   })
  //   it('removes the input field and save and edit buttons', () => {
  //     expect(row.find('#new-feature-input').exists()).toBe(false)
  //     expect(row.find('#feature-cancel-button').exists()).toBe(false)
  //     expect(row.find('#feature-save-button').exists()).toBe(false)
  //     expect(row.find('#new-feature-button').exists()).toBe(true)
  //   })
  //   it('toggles state.featureInput', () => {
  //     row.find('#feature-cancel-button').simulate('click')
  //
  //     expect(row.state('featureInput')).toBe(false)
  //   })
  // })
})
