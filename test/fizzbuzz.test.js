/* eslint-disable space-before-function-paren */
import { describe, expect, it } from 'vitest'
import { fizzbuzz } from '../src/fizzbuzz'

describe('fizzbuzz', () => {
  /* Covered by the following tests */
  // it('should be a function', () => {
  //   expect(typeof fizzbuzz).toBe('function')
  // })

  // it('should throw an error if not number is provided', () => {
  //   expect(() => fizzbuzz()).toThrow()
  // })

  // it('should throw a specific error message if not number is provided', () => {
  //   expect(() => fizzbuzz()).toThrow(/number/) // Must include `number`
  // })

  it('should throw the error message "A number must be provided" if not ' +
    'number is provided', () => {
    expect(() => fizzbuzz()).toThrow('A number must be provided')
  })

  it('should throw the error message "A number must be provided" if `NaN` ' +
    'is provided', () => {
    expect(() => fizzbuzz(NaN)).toThrow('A number must be provided')
  })

  it('should return 1 if number provided is 1', () => {
    expect(fizzbuzz(1)).toBe(1)
  })

  it('should return 2 if number provided is 2', () => {
    expect(fizzbuzz(2)).toBe(2)
  })

  it('should return "fizz" if number provided is 3', () => {
    expect(fizzbuzz(3)).toBe('fizz')
  })

  it('should return "fizz" if number provided is multiple of 3', () => {
    expect(fizzbuzz(6)).toBe('fizz')
    expect(fizzbuzz(9)).toBe('fizz')
    expect(fizzbuzz(12)).toBe('fizz')
  })

  /* Redundant test */
  // it('should return 4 if number provided is 4', () => {
  //   expect(fizzbuzz(4)).toBe(4)
  // })

  it('should return "buzz" if number provided is multiple of 5', () => {
    expect(fizzbuzz(5)).toBe('buzz')
    expect(fizzbuzz(10)).toBe('buzz')
    // expect(fizzbuzz(15)).toBe('buzz') => Multiple of both (3 and 5)
    // Should has it's own test
    expect(fizzbuzz(20)).toBe('buzz')
  })

  it('should return "fizzbuzz" if number provided is multiple of 3 and 5 ' +
    '(or 15)', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz')
  })
})
