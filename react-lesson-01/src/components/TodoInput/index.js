import React, { Component,createRef } from 'react'
import PropTypes from 'prop-types'

//通过ref获取组件或者dom元素，使用ref之前必须先调用createRef
//首字母大写是类、对象；小写是方法等
export default class TodoInput extends Component {
    static propTypes = {
        btnText:PropTypes.string
    }
    static defaultProps = {
        btnText:'添加Todo'
    }
    // 构造函数，只会执行一次
    constructor(){
        super()
        this.state = {
            inputValue:''
        }
        // this.handleAddClick = this.handleAddClick.bind(this)
        this.inputDom = createRef()
    }
    handleInputChange = (e)=>{
        this.setState({
            inputValue:e.currentTarget.value
        })
    }
    //直接在jsx里写箭头函数，是匿名函数，每次渲染都会重新生成
    handleAddClick = ()=>{
        console.log(this.inputDom)
        this.props.addTodo(this.state.inputValue)
        this.setState({
            inputValue:''
        },()=>{
            this.inputDom.current.focus()
        })
    }
    handleKeyUp = (e)=>{
        if(e.keyCode===13){
            this.props.addTodo(this.state.inputValue)
            this.setState({
                inputValue:''
            },()=>{
                this.inputDom.current.focus()
            })
        }
    }

    render() {
        return (
            <div>
                <input ref={this.inputDom} type="text" value={this.state.inputValue} onChange={this.handleInputChange} onKeyUp={this.handleKeyUp} />

                <button onClick={this.handleAddClick}>{this.props.btnText}</button>

            </div>
        )
    }
    // 传参形式
    // 1.包一层箭头函数（不推荐）
    // <button onClick={()=>{this.handleAddClick(123)}}>{this.props.btnText}</button>

    // 2.bind传参
    // 注意：每次渲染都会bind一下，可以写入构造函数里
    // <button onClick={this.handleAddClick.bind(this,'123')}>{this.props.btnText}</button>

    // 3.写成一个组件，把方法通过props传入，onClick时调用this.props.clickFn
}
