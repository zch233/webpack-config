import {a} from './a.js'

const b = import('./b.js')

const hi = () => {
  console.log('hi')
  console.log(a)
  console.log(b)
  console.log(Promise.resolve('hi'))
}

hi()