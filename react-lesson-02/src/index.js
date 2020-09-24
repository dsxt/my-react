import React from 'react'
import { render } from 'react-dom'
import { CounterProvider } from './countStore'
import App from './App'

render(
    // <Counter />,
    <CounterProvider>
        <App />
    </CounterProvider>,
    document.querySelector('#root')
)
