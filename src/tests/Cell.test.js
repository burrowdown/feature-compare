import React from 'react'
import { shallow } from 'enzyme'
import Cell from '../Cell'

/* global it describe expect beforeEach */

describe('Cell', () => {
  let cell
  beforeEach(() => {
    cell = shallow(<Cell />)
  })
  it('loads a blank cell', () => {
    expect(cell.find('.cell-display-blank').exists()).toBe(true)
  })
  describe('when clicking a cell', () => {
    it('updates blank cells to green', () => {
      cell.find('.cell-display-blank').simulate('click')
      expect(cell.find('.cell-display-green').exists()).toBe(true)
    })
    it('updates green cells to red', () => {
      cell.setState({display: 'green'})
      cell.find('.cell-display-green').simulate('click')
      expect(cell.find('.cell-display-red').exists()).toBe(true)
    })
    it('updates red cells to blank', () => {
      cell.setState({display: 'red'})
      cell.find('.cell-display-red').simulate('click')
      expect(cell.find('.cell-display-blank').exists()).toBe(true)
    })
  })
})
