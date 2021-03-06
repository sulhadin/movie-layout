import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { Provider } from 'react-redux'
import App from './presenters/App'
import store from './store/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
