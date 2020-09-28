import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
// HashRouter有#，BrowserRouter无#
import { BrowserRouter as Router,Route } from 'react-router-dom'

import App from './App'

import store from './store'

render(
    // Provider必须接受一个store，一般在最顶层外包裹一个Provider，在子组件里connect（是一个高阶组件）接受state和dispatch
    <Provider store={store}>
        <Router>
            <Route component={App} path="/" />
        </Router>
    </Provider>,
    document.querySelector('#root')
)
