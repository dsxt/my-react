import React from 'react'
import ReactDOM from 'react-dom'

//函数式组件，通过箭头函数创建组件,首字母要大写
const CreateApp = (props)=>{
return (
<div>
    {/* 我是注释：jsx里加入js代码加花括号即可 */}
    <h1>Welcome {props.title} !!!</h1>
</div>
)
}

// const app = CreateApp({
//     title:'react 16.13.1'
// })
ReactDOM.render(
    // app,
    <CreateApp title="0922" />,
    document.querySelector('#root')
)