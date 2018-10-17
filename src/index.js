import React from 'react'
import ReactDOM from 'react-dom'
import './stylesheets/index.css'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App'
import { unregister } from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
unregister()
