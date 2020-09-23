import React, { Component } from 'react'

export default class Like extends Component {
    constructor(){
        super()
        this.state = {
            isLiked:false
        }
    }
    clickFn = ()=>{
        // this.state.isLiked = !this.state.isLiked 能修改数据，但界面不会重新渲染，不被允许
        // setState有2个参数
        // 第一个参数有2中情况：
        // 1.一个对象，
        // this.setState({
        //     isLiked : !this.state.isLiked
        // })
        // 2.一个方法，参数是上一次的state和上一次的props,最后return一个对象
        this.setState((prevState,prevProps)=>{
            console.log(prevState,prevProps)
            console.log('内：',this.state.isLiked)
            return{
                isLiked : !prevState.isLiked
            }
        },()=>{
            // setState是异步的，延迟执行,想要获取最新的state，在第二个参数里获取
            console.log(this.state.isLiked)
        })
        console.log('外：',this.state.isLiked)
        
    }
    render() {
        return (
            <div onClick={this.clickFn}>
                {this.state.isLiked?'取消 ❤️':'喜欢 🖤'}
            </div>
        )
    }
}
