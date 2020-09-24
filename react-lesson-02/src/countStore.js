import React,{Component,createContext} from 'react'
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

export {
    CounterProvider,
    CountConsumer
}