import {a} from './a.js'
import { JSXDemo } from './jsx-demo.jsx';

const b = import('./b.js')

const hi = () => {
  console.log('hi')
  console.log(a)
  console.log(b)
  console.log(Promise.resolve('hi'))
}

console.log(JSXDemo)

hi()