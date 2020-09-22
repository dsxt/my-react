import React, {Component} from 'react'
import {render} from 'react-dom'
import classNames from 'classnames'
import styled from 'styled-components'
//styled-jsx了解

import './index.css'

const Title = styled.li`color:#f00`

class App extends Component {
    render(){
        const style = {color:'#f00'}
        return (
            <div>
                <h1>元素的样式</h1>
                <ol>
                    <li style={style}>使用style内联创建</li>
                    <li className="has-text-red">使用className(calss要写成className，避免关键字)</li>
                    <li className={classNames('a',{'b':true,'c':false})}>使用第三方包classnames,动态添加类名</li>
                    <Title>使用第三方包styled-components</Title>
                </ol>
            </div>
            
        )
    }
}

render(
    <App />,
    document.querySelector('#root')
)