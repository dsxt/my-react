// rcc回车，快捷创建类组件模板；rfc回车，快捷创建函数式模板
import React, { Component ,Fragment} from 'react'
import {
    TodoHeader,
    TodoInput,
    TodoList
} from './components'
//Fragment 表示空标签,也可以用<></>
export default class App extends Component {
    render() {
        return (
            <Fragment>
                <TodoHeader />
                <TodoInput />
                <TodoList />
            </Fragment>
            // <>
            //     <TodoHeader />
            //     <TodoInput />
            //     <TodoList />
            // </>
        )
    }
}
