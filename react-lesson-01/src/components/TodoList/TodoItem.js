import React, { Component } from 'react'
const noop = ()=>{}

// PureComponent自动在shouldComponentUpdate里做了第一层的浅比较
export default class TodoItem extends Component {

    // constructor只会执行一次
    // 完成了数据的初始化
    // 它接受两个参数：props和context，当想在函数内部使用这两个参数时，需使用super()传入这两个参数。
    // 注意：只要使用了constructor()就必须写super(),否则会导致this指向错误。
    constructor(props,context){
        super()
        // console.log(props,context,'constructor')
        this.state = {
            completedText:props.completed?'完成':'未完成',
            hasError: false
        }
    }

    // 加前缀UNSAFE_代表即将被废弃
    // 一般用的比较少，它更多的是在服务端渲染时使用。它代表的过程是组件已经经历了constructor()初始化数据后，但是还未渲染DOM时。
    // UNSAFE_componentWillMount(){
    //     console.log('componentWillMount')
    // }

    // 组件第一次渲染完成，此时dom节点已经生成，可以在这里调用ajax请求，返回数据setState后组件会重新渲染
    componentDidMount(){
        // console.log('componentDidMount')
    }

    // 在此处完成组件的卸载和数据的销毁。
    // clear你在组建中所有的setTimeout,setInterval
    // 移除所有组建中的监听 removeEventListener
    // 有时候组件被销毁，请求数据还未返回会报错，需加开关Bool值 && this.setState({})
    componentWillUnmount(){
        console.log('componentWillUnmount ')
    }

    // 在接受父组件改变后的props需要重新渲染组件时用到的比较多
    // 接受一个参数nextProps
    // 通过对比nextProps和this.props，将nextProps的state为当前组件的state，从而重新渲染组件
    // 弊端：判断前后两个 props 是否相同，如果不同再将新的 props 更新到相应的 state 上去。
    //      这样做一来会破坏 state 数据的单一数据源，导致组件状态变得不可预测，另一方面也会增加组件的重绘次数
    // UNSAFE_componentWillReceiveProps (nextProps){
    //     console.log(nextProps,'componentWillReceiveProps')
    //     this.setState({
    //         completedText:nextProps.completed?'完成':'未完成'
    //     })
    // }

    // 代替componentWillReceiveProps()
    static getDerivedStateFromProps(nextProps, prevState) {
        // console.log(nextProps, prevState,'getDerivedStateFromProps')
        return {
            completedText:nextProps.completed?'完成':'未完成'
        }
    }

    // 三种情况触发
    // 1.state改变时，2.props改变时，3.强制刷新this.forceUpdate()
    // 返回 false，则不会调用 render()
    // 主要用于性能优化(部分更新)
    // 唯一用于控制组件重新渲染的生命周期，由于在react中，setState以后，state发生变化，组件会进入重新渲染的流程，在这里return false可以阻止组件的更新
    // 因为react父组件的重新渲染会导致其所有子组件的重新渲染，这个时候其实我们是不需要所有子组件都跟着重新渲染的，因此需要在子组件的该生命周期中做判断
    shouldComponentUpdate(nextProps,nextState){
        // 决定组件是否要更新
        return nextProps.completed !== this.props.completed
    }

    // shouldComponentUpdate返回true以后，组件进入重新渲染的流程，进入componentWillUpdate,这里同样可以拿到nextProps和nextState
    // UNSAFE_componentWillUpdate(nextProps,nextState){
    //     console.log(nextProps,nextState,'componentWillUpdate')
    // }

    // 代替componentWillUpdate(),获取dom信息，然后通过componentDidUpdate反映
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log(prevProps, prevState,'getSnapshotBeforeUpdate')
        return null;
    }

    // 组件更新完毕后，react只会在第一次初始化成功会进入componentDidmount,之后每次重新渲染后都会进入这个生命周期，这里可以拿到prevProps和prevState，即更新前的props和state
    componentDidUpdate(prevProps,prevState){
        console.log(prevProps,prevState,'componentDidUpdate')
    }

    // 后代组件抛出错误后被调用
    static getDerivedStateFromError(error) {
        // 更新 state 使下一次渲染可以显降级 UI
        return { hasError: true };
    }

    // 后代组件抛出错误后被调用;参数：抛出的错误、带有 componentStack key 的对象，其中包含有关组件引发错误的栈信息
    componentDidCatch(error, info){}

    // render函数会插入jsx生成的dom结构，react会生成一份虚拟dom树，在每一次组件更新时，在此react会通过其diff算法比较更新前后的新旧DOM树，
    // 比较以后，找到最小的有差异的DOM节点，并重新渲染
    render() {
        // console.log(`Todoitem ${this.props.title} render`)
        const {
            completed,
            title
        } = this.props
        return (
            <>
                {
                    this.state.hasError
                    ?
                    <h1>Something went wrong.</h1>
                    :
                    <div>
                        <input type="checkbox" checked={completed} onChange={this.handleCheckFn} />
                        <span>{title} {this.state.completedText}</span>
                        {/* <span>{title} {completed?'完成':'未完成'} {this.state.completedText}</span> */}
                    </div>
                }
            </>
        )
    }

    handleCheckFn = ()=>{
        // this.props.onCompletedChange && this.props.onCompletedChange(this.props.id)
        const {
            onCompletedChange=noop,
            id
        } = this.props
        onCompletedChange(id)
    }
}

// componentWillReceiveProps与getDerivedStateFromProps的不同：
// 在 componentWillReceiveProps 中，我们一般会做以下两件事，一是根据 props 来更新 state，二是触发一些回调，如动画或页面跳转等。
// 在老版本的 React 中，这两件事我们都需要在 componentWillReceiveProps 中去做。
// 而在新版本中，官方将更新 state 与触发回调重新分配到了 getDerivedStateFromProps 与 componentDidUpdate 中，使得组件整体的更新逻辑更为清晰。
// 而且在 getDerivedStateFromProps 中还禁止了组件去访问 this.props，强制让开发者去比较 nextProps 与 prevState 中的值，
// 以确保当开发者用到 getDerivedStateFromProps 这个生命周期函数时，就是在根据当前的 props 来更新组件的 state，而不是去做其他一些让组件自身状态变得更加不可预测的事情

// componentWillUpdate与getSnapshotBeforeUpdate的比较：
// 常见的 componentWillUpdate 的用例是在组件更新前，读取当前某个 DOM 元素的状态，并在 componentDidUpdate 中进行相应的处理。
// 这两者的区别在于：
// 在 React 开启异步渲染模式后，在 render 阶段读取到的 DOM 元素状态并不总是和 commit 阶段相同，这就导致在
// componentDidUpdate 中使用 componentWillUpdate 中读取到的 DOM 元素状态是不安全的，因为这时的值很有可能已经失效了。
// getSnapshotBeforeUpdate 会在最终的 render 之前被调用，也就是说在 getSnapshotBeforeUpdate 中读取到的 DOM 元素状态是可以保证与 componentDidUpdate 中一致的。
// 此生命周期返回的任何值都将作为参数传递给componentDidUpdate()