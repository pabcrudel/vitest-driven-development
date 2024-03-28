import { afterEach, describe, expect, it, vi } from 'vitest'
import { myFunction } from './function'
import { fetchData } from './lib'

vi.mock('./lib', () => ({
  fetchData: vi.fn()
}))

describe('reading messages', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should get with a mock', () => {
    fetchData.mockReturnValueOnce(true)

    expect(myFunction()).toEqual('Success')
  })
})
