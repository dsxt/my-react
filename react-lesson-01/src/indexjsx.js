import React, {Component} from 'react'
import {render} from 'react-dom'

//jsx的原理-把标签转化为虚拟dom树再渲染成dom元素
//React.createElement(type,{props},[...children])
class App extends Component {
    render(){
        return(
            React.createElement(
                'div',
                {
                    className:'app',
                    id:'appRoot'
                },
                React.createElement(
                    'h1',
                    {
                        className:'title'
                    },
                    'jsx的原理'
                ),
                React.createElement(
                    'p',
                    null,
                    'jsx的原理的描述'
                )
            )
        )
    }
}

render(
    <App />,
    document.querySelector('#root')
)