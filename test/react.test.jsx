import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, it } from 'vitest'
import { Calculator } from '../src/calculator'

/** DISCLAIMER: (December 2023)
 * That's my first time using React. I so confident with Vue.js so I consider
 * that I can face this challenge. However, I will copy-paste from the
 * tutorial all the source code that I haven't seen before.
 */

describe('Calculator', () => {
  /** As each test renders the component, it will be duplicated.
   * `
   * TestingLibraryElementError: Found multiple elements with the text:
   * Calculator
   *
   * Here are the matching elements:
   *
   * Ignored nodes: comments, script, style
   *  <h1>
   *   Calculator
   *  </h1>
   *
   * Ignored nodes: comments, script, style
   *  <h1>
   *   Calculator
   *  </h1>
   * `
   * To avoid that, `Vitest` has a function to perform something for each test.
   * In this case, cleaning the rendered elements using `cleanup` provided by
   * React testing library.
  */
  afterEach(cleanup)

  it('should render', () => {
    // Allows me to test React components
    render(<Calculator />)
  })

  it('should render "Calculator" anywhere in the document correctly', () => {
    render(<Calculator />)

    /** Gets from the screen anything with the provided text.
     * It doesn't need `expect()` because `screen` is performing the test.
     * If 'calculator' is not there, it will throw an error.
     */
    // screen.getByText('Calculator')
    screen.getByText('Calculator')
  })
})
