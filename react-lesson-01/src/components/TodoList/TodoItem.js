import React, { Component } from 'react'
const noop = ()=>{}

// PureComponent自动在shouldComponentUpdate里做了第一层的浅比较
export default class TodoItem extends Component {
    // constructor只会执行一次
    constructor(props){
        super()
        this.state = {
            completedText:props.completed?'完成':'未完成'
        }
    }
    handleCheckFn = ()=>{
        // this.props.onCompletedChange && this.props.onCompletedChange(this.props.id)
        const {
            onCompletedChange=noop,
            id
        } = this.props
        onCompletedChange(id)
    }
    // 三种情况触发
    // 1.state改变时，2.props改变时，3.强制刷新this.forceUpdate()
    shouldComponentUpdate(nextProps,nextState){
        // 决定组件是否要更新
        return nextProps.completed !== this.props.completed
    }
    
    static getDerivedStateFromProps(props){
        return {
            completedText:props.completed?'完成':'未完成'
        }
    }
    // UNSAFE_componentWillReceiveProps(nextProps){
    //     this.setState({
    //         completedText:nextProps.completed?'完成':'未完成'
    //     })
    // }

    render() {
        console.log(`Todoitem ${this.props.title} render`)
        const {
            completed,
            title
        } = this.props
        return (
            <div>
                <input type="checkbox" checked={completed} onChange={this.handleCheckFn} />
                <span>{title} {this.state.completedText}</span>
                {/* <span>{title} {completed?'完成':'未完成'} {this.state.completedText}</span> */}
            </div>
        )
    }
}
