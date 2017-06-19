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
  let onSave, row
  beforeEach(() => {
    onSave = jest.fn
    row = shallow(<FeatureRow
      features={[]}
      onNewFeatureSave={onSave}
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
  describe('the save button', () => {
    let button
    beforeEach(() => {
      button = row.find('#new-feature-button')
      button.simulate('click')
    })
    it('resets featureInput and currentNewFeatureInput', () => {
      row.find('#feature-save-button').simulate('click')
      expect(row.state('featureInput')).toBe(false)
      expect(row.state('currentNewFeatureInput')).toBe('')
    })
  })
  describe('the cancel button', () => {
    beforeEach(() => {
      row.setState({featureInput: true})
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
