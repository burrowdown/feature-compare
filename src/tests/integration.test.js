import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import { mount } from 'enzyme'

/* global it describe expect beforeEach */

describe('integration test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
  })
  describe('when adding a feature', () => {
    let app, newFeatureButton
    beforeEach(() => {
      app = mount(<App />)
      // TODO: instead of simulating this button click, can I set the state of a downstream component?
      newFeatureButton = app.find('#new-feature-button')
      newFeatureButton.simulate('click')
    })
    it('will update currentNewFeatureInput when typing', () => {
      app.find('#new-feature-input').simulate('change', {target: {value: 'foo'}})
      expect(app.state('currentNewFeatureInput')).toBe('foo')
    })
    it('will save currentNewFeatureInput to features', () => {
      app.setState({ currentNewFeatureInput: 'bar' })
      app.find('#feature-save-button').simulate('click')
      expect(app.state('features')).toContain('bar')
    })
    it('will not save of no input', () => {
      app.setState({ currentNewFeatureInput: '' })
      app.find('#feature-save-button').simulate('click')
      expect(app.state('features')).not.toContain('bar')
    })
    it('will revert state on cancel button click', () => {
      app.find('#feature-cancel-button').simulate('click')
      // TODO: inspect downstream state?
      expect(app.find('#feature-cancel-button').exists()).toBe(false)
    })
  })
})
