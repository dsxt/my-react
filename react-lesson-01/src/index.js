import React from 'react'
import {render} from 'react-dom'

import App from './App'

// 全局挂载/扩展React.Component.prototype
// import * as getTodos from './api'
// React.Component.prototype.http = getTodos

render(
    <App />,
    document.querySelector('#root')
)