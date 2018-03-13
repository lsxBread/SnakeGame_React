import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './assets/css/reset.css'
import App from './components/App'
import store from './store/index'
import registerServiceWorker from './registerServiceWorker'


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
