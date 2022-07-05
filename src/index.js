import React from 'react'
import ReactDOM from 'react-dom'
import App from './06-react-redux/App'
import { Provider } from 'react-redux'
import store from './06-react-redux/redux/store'

ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>
    , document.getElementById('root'))