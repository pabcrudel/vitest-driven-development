import { fetchData } from './lib'

export function myFunction () {
  const res = fetchData()

  return res ? 'Success' : 'Fail'
}
