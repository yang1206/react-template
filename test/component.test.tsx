import { cleanup, fireEvent, render } from '@testing-library/react'
import React from 'react'
import { afterEach, describe, expect, it } from 'vitest'
import Counter from '../src/pages/count'

describe('counter', () => {
  afterEach(cleanup)

  it('should render', () => {
    const { getByText } = render(<Counter />)
    expect(getByText('0')).toBeDefined()
  })

  it('should be interactive', () => {
    const { getByText } = render(<Counter />)
    expect(getByText('0')).toBeDefined()

    fireEvent.click(getByText('+'))
    fireEvent.click(getByText('-'))
    expect(getByText('0')).toBeDefined()
  })
})
