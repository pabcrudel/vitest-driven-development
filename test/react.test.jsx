import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
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

  /** As each test on this tutorial renders the component, I consider that is
   * a better approach to do so at the beginning of each test.
   * Other approach that fits to me is delete `afterEach()` and `beforeEach()`
   * but leaving `render(<Calculator />)` on first test.
   * In this case, I'm using `afterEach()` and `beforeEach()` because I want to
   * leave here how to perform something for each test, at the beginning or at
   * the end.
   */
  beforeEach(() => render(<Calculator />))

  it('should render', () => {
    // `render(<Calculator />)` => Allows me to test React components
  })

  it('should render "Calculator" anywhere in the document', () => {
    /** Gets from the screen anything with the provided text.
     * It doesn't need `expect()` because `screen` is performing the test.
     * If 'calculator' is not there, it will throw an error.
     */
    screen.getByText('Calculator')
  })

  it('should render numbers anywhere in the document', () => {
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      .forEach(number => screen.getByText(number))
  })

  it('should render 4 rows like in a calculator UI', () => {
    const rows = screen.getAllByRole('row')

    expect(rows).toHaveLength(4)
  })
})
