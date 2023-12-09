/* eslint-disable space-before-function-paren */
import { describe, expect, it } from 'vitest'
import { canReconfigure } from '../src/can-reconfigure'

describe('canReconfigure', () => {
  /* Covered by the following tests */
  // it('should be a function', () => {
  //   expect(canReconfigure).toBeTypeOf('function')
  // })

  it('should throw specific error messages if any parameter is missing',
    () => {
      expect(() => canReconfigure()).toThrow('"from" parameter is required')
      expect(() => canReconfigure('from')).toThrow('"to" parameter is required')
    })

  it('should throw specific error messages if any parameter is not a string',
    () => {
      expect(() => canReconfigure(2))
        .toThrow('"from" parameter must be a string')
      expect(() => canReconfigure('from', 2))
        .toThrow('"to" parameter must be a string')
    })

  it('should return a boolean', () => {
    expect(canReconfigure('from', 'to')).toBeTypeOf('boolean')
  })

  it('should return "false" if strings have different lengths',
    () => {
      expect(canReconfigure('from', 'to')).toBe(false)
    })

  it('should return "false" if strings have different number of unique letters',
    () => {
      expect(canReconfigure('aws', 'aww')).toBe(false)
    })

  it('should return "false" if strings have same number of unique letters ' +
  'but different lengths', () => {
    expect(canReconfigure('aww', 'aw')).toBe(false)
  })

  it('should return "false" if strings have different order of transformation',
    () => {
      expect(canReconfigure('xbox', 'xxbo')).toBe(false)
      expect(canReconfigure('con', 'juu')).toBe(false)
    })

  it('should return "true" if strings have same order of transformation',
    () => {
      expect(canReconfigure('xbox', 'xobx')).toBe(true)
      expect(canReconfigure('xbxo', 'xoxb')).toBe(true)
    })
})
