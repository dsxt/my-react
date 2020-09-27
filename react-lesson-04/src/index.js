import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'

import store from './store'

render(
    // Provider必须接受一个store，一般在最顶层外包裹一个Provider，在子组件里connect（是一个高阶组件）接受state和dispatch
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
)
