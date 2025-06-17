import React from 'react'
import { shallow } from 'enzyme'
import Cell from '../Cell'

/* global it describe expect beforeEach jest */

describe('Cell', () => {
  let cell, onUpdate
  beforeEach(() => {
    onUpdate = jest.fn
    cell = shallow(<Cell onPointsUpdate={onUpdate} />)
  })
  it('loads a blank cell', () => {
    expect(cell.find('.cell-display-blank').exists()).toBe(true)
  })
  describe('when clicking a cell', () => {
    it('updates blank cells to green', () => {
      cell.setState({display: 'blank'})
      cell.find('.cell-display-blank').simulate('click')
      expect(cell.state('display')).toBe('green')
    })
    it('updates green cells to red', () => {
      cell.setState({display: 'green', css: 'cell-display-green'})
      cell.find('.cell-display-green').simulate('click')
      expect(cell.state('display')).toBe('red')
    })
    it('updates red cells to blank', () => {
      cell.setState({display: 'red', css: 'cell-display-red'})
      cell.find('.cell-display-red').simulate('click')
      expect(cell.state('display')).toBe('blank')
    })
  })
})
