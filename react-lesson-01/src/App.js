// rcc回车，快捷创建类组件模板；rfc回车，快捷创建函数式模板
import React, { Component } from 'react'
import {
    TodoHeader,
    TodoInput,
    TodoList,
    Like
} from './components'
//Fragment 表示空标签,也可以用<></>
import { getTodos } from './api'
export default class App extends Component {
    // constructor(){
    //     super()//必须先调用super()，不然this回报错
    //     this.state = {
    //         title:'待办事项列表',
    //         desc:'今日事，今日毕'
    //     }
    // }
    state = {
        title:'待办事项列表',
        desc:"今日事，今日毕",
        article:"<div>标签<i>描述</i></div>",//渲染富文本用dangerouslySetInnerHTML
        todos:[],
        isLoading:false
    }
    addTodo = (todoTitle)=>{
        console.log(todoTitle)
        if(!todoTitle){
            return
        }
        // push返回的是数组的长度，concat返回的是新数组
        //arr.slice()拷贝数组
        this.setState({
            todos:this.state.todos.concat({
                id:Math.random(),
                title:todoTitle,
                completed:false
            })
        })
    }
    onCompletedChange = (id)=>{
        this.setState((prevState)=>{
            return {
                todos:prevState.todos.map(item=>{
                    if(item.id === id){
                        item.completed = !item.completed
                    }
                    return item
                })
            }
        })
    }
    getData = ()=>{
        this.setState({
            isLoading:true
        })
        getTodos().then(res=>{
            console.log(res.data)
            if(res.status===200){
                setTimeout(()=>{
                    this.setState({
                        todos:res.data,
                        isLoading:false
                    })
                },2000)
            }
        }).catch(err=>{})
    }
    componentDidMount(){
        this.getData()
    }
    render() {
        return (
            // <Fragment>
            //     {this.state.article}
            //     <div dangerouslySetInnerHTML={{__html:this.state.article}} />
            //     {
            //         this.state.todos.map(item=>{
            //         return <div key={item.id}>{item.title}</div>
            //         })
            //     }
            // </Fragment>
            <>
                <TodoHeader desc={this.state.desc} x={1} y={2}>
                    <i>{this.state.title}</i>
                </TodoHeader>
                <TodoInput btnText="add" addTodo={this.addTodo} />
                {
                    this.state.isLoading
                    ?
                    <div>loading...</div>
                    :
                    <TodoList todos={this.state.todos} onCompletedChange={this.onCompletedChange} />
                }
                <Like />
            </>
        )
    }
}
