import {a} from '@/a.js'
import { JSXDemo } from '@/jsx-demo.jsx';
import {tsDemo} from '@/ts-demo.ts'
import {TsxDemo} from '@/tsx-demo.tsx'
import './scss-demo.scss'
import scssVars from './scss-demo.scss'

console.log(tsDemo)
console.log(scssVars)
console.log(TsxDemo)
const b = import('./b.js')

const hi = () => {
  console.log('hi')
  console.log(a)
  console.log(b)
  console.log(Promise.resolve('hi'))
}

console.log(JSXDemo)

hi()