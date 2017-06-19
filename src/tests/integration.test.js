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
  let app
  beforeEach(() => {
    app = mount(<App />)
  })
  describe('when adding a feature', () => {
    let newFeatureButton
    beforeEach(() => {
      newFeatureButton = app.find('#new-feature-button')
      newFeatureButton.simulate('click')
    })
    it('will save input to features', () => {
      app.find('#new-feature-input').simulate('change', {target: {value: 'foo'}})
      app.find('#feature-save-button').simulate('click')
      expect(app.state('features').pop().name).toContain('foo')
    })
    it('will not save if no input', () => {
      app.find('#new-feature-input').simulate('change', {target: {value: ''}})
      app.find('#feature-save-button').simulate('click')
      expect(app.state('features').length).toBe(0)
    })
    it('will revert state on cancel button click', () => {
      app.find('#feature-cancel-button').simulate('click')
      expect(app.find('#feature-cancel-button').exists()).toBe(false)
    })
  })
  describe('when editing a weight', () => {
    let weightField
    beforeEach(() => {
      app.setState({features: [{'name': 'waterproof', 'weight': 42}]})
      weightField = app.find('#waterproof')
    })
    it('something', () => {
      weightField.simulate('click')
      let input = weightField.find('.weight-input')
      input.simulate('change', {target: {value: '321'}})
      expect(app.state('features')[0].weight).toBe('321')
    })
  })
})
