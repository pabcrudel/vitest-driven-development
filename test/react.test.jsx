import { render } from '@testing-library/react'
import { describe, it } from 'vitest'
import { Calculator } from '../src/calculator'

/**
 * DISCLAIMER: (December 2023)
 * That's my first time using React. I so confident with Vue.js so I consider
 * that I can face this challenge. However, I will copy-paste from the
 * tutorial all the source code that I haven't seen before.
 */

describe('Calculator', () => {
  it('should render', () => {
    // Allows me to test React components
    render(<Calculator />)
  })
})
