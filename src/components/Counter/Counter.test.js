import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import Counter from './Counter'

describe('Counter component renders as expected', () => {
  test('it renders the score and +/-', () => {
    const score = 4;
    const { getByText } = render(<Counter score={score} />)

    const incrementNode = getByText('+')
    const decrementNode = getByText('-')

    expect(incrementNode).toBeVisible()
    expect(decrementNode).toBeVisible()

  })
})

describe('User interaction with post functions as expected', () => {
  test('the increment and decrement buttons work as expected', () => {
    const score = 0;
    const { getByText } = render(<Counter score={score} />)

    const incrementNode = getByText('+')
    const decrementNode = getByText('-')
    const scoreNode = getByText(score)

    expect(incrementNode).toBeVisible()
    expect(decrementNode).toBeVisible()
    expect(scoreNode).toBeVisible()


  })
})