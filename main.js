import './style.scss'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
 
`

setupCounter(document.querySelector('#counter'))
