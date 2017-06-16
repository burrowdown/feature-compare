import React from 'react'
import { shallow } from 'enzyme'
import FeatureRow from '../FeatureRow'

/* global it describe expect beforeEach jest */

describe('FeatureRow', () => {
  it('loads the right number of cells', () => {
    let row = shallow(<FeatureRow features={[]} />)
    expect(row.find('td').length).toBe(5)
  })
})

describe('when adding a feature', () => {
  let onSave, onChange, row
  beforeEach(() => {
    onSave = jest.fn
    onChange = jest.fn
    row = shallow(<FeatureRow
      features={[]}
      onNewFeatureSave={onSave}
      onNewFeatureInputChange={onChange}
    />)
  })

  describe('the "add feature" button', () => {
    let button
    beforeEach(() => {
      button = row.find('#new-feature-button')
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
  describe('the save button', () => {
    let button
    beforeEach(() => {
      button = row.find('#new-feature-button')
      button.simulate('click')
    })
    it('this is the check one', () => {
      expect(row.find('#feature-save-button').exists()).toBe(true)
      expect(row.state('featureInput')).toBe(true)
    })
    it('sets featureInput to false', () => {
      row.find('#feature-save-button').simulate('click') // this.props.onNewFeatureSave is not a function????
      // expect(onSave).toBeCalled()
      expect(row.state('featureInput')).toBe(false)
    })
  })
  describe('the cancel button', () => {
    beforeEach(() => {
      row.setState({
        featureInput: true
      })
      row.find('#feature-cancel-button').simulate('click')
    })
    it('removes the input field and save and edit buttons', () => {
      expect(row.find('#new-feature-input').exists()).toBe(false)
      expect(row.find('#feature-cancel-button').exists()).toBe(false)
      expect(row.find('#feature-save-button').exists()).toBe(false)
      expect(row.find('#new-feature-button').exists()).toBe(true)
    })
    it('toggles state.featureInput', () => {
      expect(row.state('featureInput')).toBe(false)
    })
  })
})
