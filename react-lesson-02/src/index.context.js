import React,{Component,createContext,useState,useEffect} from 'react'
import { render } from 'react-dom'

// const Counter = ()=>{
//     const [count,setCount] = useState(10)
//     // const [title,setTitle]=useState('abc')

//     // 类似于componentDidMount和componentDidUpdate的结合，数据创建和刷新时触发
//     useEffect(()=>{
//         console.log('更新了')
//         document.title = `当前数量：${count}`
//     })
//     return (
//         <>
//             <button onClick={()=>{
//                 setCount(count - 1)
//             }}>-</button>
//             <span>{count}</span>
//             <button onClick={()=>{
//                 setCount(count + 1)
//             }}>+</button>
//         </>
//     )
// }

//createContext这个方法提供一个对象，里面有2个组件：Provider用于提供状态，Consumer用于接收状态
const {
    Provider,
    Consumer:CountConsumer //结构出来重新赋值给CountConsumer
} = createContext()

// 封装Provider,便于管理状态
class CounterProvider extends Component {
    constructor(){
        super()
        // CounterProvider的任何后台组件都可以共享这里的状态、方法（通过CountConsumer来接收）
        this.state = {
            count:100
        }
    }
    decrementCount = ()=>{
        this.setState({
            count:this.state.count-1
        })
    }
    incrementCount = ()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    render(){
        return (
            <Provider value={{
                count:this.state.count,
                decrementCount:this.decrementCount,
                incrementCount:this.incrementCount,
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

class Counter extends Component {
    render(){
        // Consumer（上面解构重命名为CountConsumer）的children必须是一个方法
        return (
        <CountConsumer>
            {
                // 解构
                ({count})=>{
                    return(
                        <span>{count}</span>
                    )
                }
            }
        </CountConsumer>
        )
    }
}

class CountBtn extends Component {
    render(){
        return (
            <CountConsumer>
                {
                    ({decrementCount,incrementCount})=>{
                        const handle = this.props.type === 'decrement' ?decrementCount:incrementCount
                        return(
                            <button onClick={handle}>{this.props.children}</button>
                        )
                    }
                }
            </CountConsumer>
        )
    }
}

class App extends Component {
    render() {
        return (
            <div>
                <CountBtn type="decrement">-</CountBtn>
                <Counter />
                <CountBtn type="increment">+</CountBtn>
                <div>龙&emsp;进&nbsp;天下</div>
            </div>
        )
    }
}


render(
    // <Counter />,
    <CounterProvider>
        <App />
    </CounterProvider>,
    document.querySelector('#root')
)