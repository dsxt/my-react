import React, {Component} from 'react'
import {render} from 'react-dom'

// 使用类组件，继承React.Component，可以写状态、属性、生命周期等
// render是react-dom提供的方法，一般只会用一次

const Header = ()=> <h1>类组件</h1>

class CreateApp extends Component {
    render(){
        console.log(this)
        return (
            <div>
                <Header />
                <p>{this.props.desc}</p>
            </div>
            
        )
    }
}
// 类组件渲染原理
// const app = new CreateApp({
//     desc:"类组件是继承React.Component"
// }).render()

render(
    // app,
    <CreateApp desc="类组件是继承React.Component" />,
    document.querySelector('#root')
)

// 16以前还会使用以下方式  注意：现在没了
// react.createClass({
//     render(){
//         return (
//             <h1>xxxxxx</h1>
//         )
//     }
// })