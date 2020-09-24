import React, { Component } from 'react'
import { CountBtn,Counter } from './components'
import Another from './Another'

class App extends Component {
    render() {
        return (
            <div>
                <CountBtn type="decrement">-</CountBtn>
                <Counter />
                <CountBtn type="increment">+</CountBtn>
                <div>龙&emsp;进&nbsp;天下</div>
                <Another name="组件" />
            </div>
        )
    }
}
export default App