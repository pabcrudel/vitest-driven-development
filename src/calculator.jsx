export const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const calculatorUI = [
  [7, 8, 9],
  [4, 5, 6],
  [1, 2, 3],
  [0]
]

export const Calculator = () => {
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

      <div role='grid'>
        {
          calculatorUI.map((numbers, i) => (
            <div key={i} role='row'>
              {
                numbers.map(number => <p key={number}>{number}</p>)
              }
            </div>
          ))
        }
      </div>
    </div>
  )
}
