import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import App from '../App.js'

/* global it describe expect  */

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
  })
  it('renders a Table', () => {
    const app = shallow(<App />)
    expect(app.find('Table').exists()).toBe(true)
  })
})
