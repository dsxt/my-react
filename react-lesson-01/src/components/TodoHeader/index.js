import React from 'react'
import PropTypes from 'prop-types'

//函数式组件又名无状态组件，没有自己state，16.8新功能有类似的东西
//数据、状态等来自组件之外，所以又称受控组件，了解半受控组件
//函数式组件没有生命周期
export default function TodoHeader(props) {
    return (
        <>
            <h1>
                {props.children}
            </h1>
            <h3>{props.desc}</h3>
            <p>{props.x+props.y}</p>
        </>
    )
}

TodoHeader.propTypes = {
    desc:PropTypes.string,
    x:PropTypes.number.isRequired,
    y:PropTypes.number.isRequired
}
TodoHeader.defaultProps = {
    desc:'TodoList'
}
