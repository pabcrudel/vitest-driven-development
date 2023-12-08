/* eslint-disable space-before-function-paren */

/**
 * A function that given a number:
 * - Print `fizz` if is a multiple of 3
 * - Print `buzz` if is a multiple of 5
 * - Print `fizzbuzz` if is a multiple of 3 and 5
 * - Print the number if not
 */
export function fizzbuzz(number) {
  // As the error message is the same, I prefer to use a single If statement
  if (typeof number !== 'number' || Number.isNaN(number)) {
    throw new Error('A number must be provided')
  }

  // Same as Midudev
  const multiples = { 3: 'fizz', 5: 'buzz' } // New cases => add to this object
  let output = ''

  // Inspired in Midudev approach
  for (const multiplier in multiples) {
    const message = multiples[multiplier]

    if (number % multiplier === 0) output += message
  }

  // Midudev suggested ternary operator but I consider that is not needed
  // because an empty string is falsy
  return output || number
}
