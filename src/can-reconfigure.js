/* eslint-disable space-before-function-paren */

/**
 * This program checks if the instructions given as parameters can reconfigure a
 * machine. They must have the same:
 * - length
 * - unique letters
 * - transformation order (tricky statement)
 */
export function canReconfigure(from, to) {
  // Parameters are provided & it's type is string
  if (from === undefined) throw new Error('"from" parameter is required')
  else if (typeof from !== 'string') {
    throw new Error('"from" parameter must be a string')
  }
  if (to === undefined) throw new Error('"to" parameter is required')
  else if (typeof to !== 'string') {
    throw new Error('"to" parameter must be a string')
  }

  // Same length
  if (from.length !== to.length) return false

  if (hasSameUniqueLetters(from) !== hasSameUniqueLetters(to)) return false

  if (!haveSameTransformationOrder(from, to)) return false

  return true
}

function hasSameUniqueLetters(word) {
  const uniques = [word[0]]
  for (const letter of word) {
    if (!uniques.includes(letter)) uniques.push(letter)
  }
  return uniques.length

  /*
    Midudev uses `new Set().size`. He explained that `Set` doesn't allow repeated
    values, so is a good tool to delete duplicates of an array or count unique
    values:
    - `const hasSameUniqueLetters = new Set(from).size === new Set(to).size`

    In my implementation I use a function that could have bugs, so I must use TDD
    with it too (maybe I could but I'm a little lazy today).

    I'd tried this code:
    `
    const lastLetters = [word[0]]
    here: for (const letter of word) {
      for (const lastLetter of lastLetters) {
        if (lastLetter === letter) continue here
      }
      lastLetters.push(letter)
    }
    return lastLetters.length
    `
    However, Standard JS Linter tells me that using labels isn't a good idea. So I
    changed it to that:
    `
    const uniques = [word[0]]
    for (const letter of word) {
      if (!uniques.find(unique => unique === letter)) uniques.push(letter)
    }
    return uniques.length
    `
    However, on Internet I founded `include()` that returns a boolean if finds an
    element in the array. I prefer that because this solves the problem with
    less code
  */
}

function haveSameTransformationOrder(from, to) {
  const transformation = { [from[0]]: to[0] }
  for (let i = 1; i < from.length; i++) {
    const fromLetter = from[i]
    const toLetter = to[i]

    for (const key in transformation) {
      const value = transformation[key]

      if (fromLetter !== key && toLetter === value) return false
    }
    transformation[fromLetter] = toLetter
  }
  return true

  /*
    This part of the algorithm was a little bit tricky to me. In my opinion,
    the statement wasn't obvious. I'm not sure, but this function must check
    if each letter has unique transformations:
    - Case 1:
      - c -> j
      - o -> u
      - n -> u // Error: there is a 'u' before
    - Case 2:
      - x -> x
      - b -> o
      - o -> b
      - x -> x // Correct: 'x' is transformed to 'x'

    My implementation passes the tests that Midudev suggest. However, his
    implementation fails the case 1:
    `
    const transformation = {}
    for (let i = 0; i < from.length; i++) {
      const fromLetter = from[i]
      const toLetter = to[i]

      const storedLetter = transformation[fromLetter]
      if (stored && stored !== toLetter) return false

      transformation[fromLetter] = toLetter
    }
    return true
    `

    I don't know if I missed something however, there's my attempt in December
    2023.
  */
}
