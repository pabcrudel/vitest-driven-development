import { evaluate } from 'mathjs'
import { useState } from 'react'

const calculatorUI = [
  [7, 8, 9],
  [4, 5, 6],
  [1, 2, 3],
  [0]
]

export const operators = ['+', '-', '*', '/']

export const Calculator = () => {
  const [value, setValue] = useState('')

  /* This arrow function calls an arrow function because is the callback of
   * the button's onClick event */
  const createHandleClick = op => () => setValue(value.concat(op))

  return (
    <div>
      <h1>Calculator</h1>

      {
        /** Commented because that code was made to pass a test which approach
         * was override. However, I want to keep here the following comment:
         *
         * I've tried to do this with a for-of however, it is not possible
         * because a expression is being expected and for-of is a statement.
         * `map()` is being used because performs an operation and returns it's
         * result. So `foreach()` is not valid because return `void`.
         *
         * numbers.map(number => <p key={number}>{number}</p>)
         */
      }

      {/** `readonly` only allows changes by clicking on the buttons
       * If this property is not provided, Vitest will warn. However, as this
       * the expected behavior, `readonly` must be set
      */}
      <input type='text' value={value} readOnly />
      <div role='grid'>
        {
          calculatorUI.map((numbers, i) => (
            <div key={i} role='row'>
              {
                numbers.map(number => {
                  return (
                    <button
                      onClick={createHandleClick(number)}
                      key={number}
                    >
                      {number}
                    </button>
                  )
                })
              }
              <button
                onClick={createHandleClick(operators[i])}
                key={operators[i]}
              >
                {operators[i]}
              </button>
            </div>
          ))
        }
      </div>
      <button onClick={() => setValue(evaluate(value))}>=</button>
    </div>
  )
}
