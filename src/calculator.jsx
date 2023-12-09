export const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

export const Calculator = () => {
  return (
    <div>
      <h1>Calculator</h1>

      {
        /** I've tried to do this with a for-of however, it is not possible
         * because a expression is being expected and for-of is a statement.
         * `map()` is being used because performs an operation and returns it's
         * result. So `foreach()` is not valid because return `void`.
         */
        numbers.map(number => <p key={number}>{number}</p>)
      }
    </div>
  )
}
