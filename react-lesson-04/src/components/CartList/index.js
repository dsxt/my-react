import React, { Component } from 'react'
import { connect } from 'react-redux'

import { increment,decrement,incrementAsync } from '../../actions/cart'

class CartList extends Component {
    constructor(){
        super()
        this.state = {
        }
    }
    componentDidMount(){
    }
    render() {
        return (
            <table border='1' cellPadding='10'>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>名称</td>
                        <td>价格</td>
                        <td>数量</td>
                        <td>操作</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.cartList.map(item=>{
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <button onClick={
                                            ()=>{
                                                // this.props.dispatch(decrement(item.id))//2
                                                // this.props.add(item.id) //1跟组件相关更纯净，上面的方法也可以,使用mapDispatchToProps
                                                this.props.decrement(item.id)
                                            }
                                        }>-</button>
                                        <span>{item.amount}</span>
                                        <button onClick={
                                            ()=>{
                                                this.props.incrementAsync(item.id)
                                            }
                                        }>等一会再加</button>
                                        <button onClick={
                                            ()=>{
                                                // this.props.dispatch(increment(item.id))//2
                                                // this.props.reduce(item.id) //1使用mapDispatchToProps
                                                this.props.increment(item.id)
                                            }
                                        }>+</button>
                                    </td>
                                    <td></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}
const mapStateToProps = (state)=>{
    // return了什么，可以用this.props来获取
    return {
        cartList:state.cart
    }
}
// const mapDispatchToProps = (dispatch)=>{//1
//     return {
//         add:id=>dispatch(decrement(id)),
//         reduce:id=>dispatch(increment(id))
//     }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(CartList)//1,2

// connect有四个参数1.mapStateToProps，把store的state传递到props上，2mapDispatchToProps,把action生成的方法传递到props上
// 以上是同步；异步、中间件待讲
export default connect(mapStateToProps,{ increment,decrement,incrementAsync })(CartList)//3

// 流程： 同步action=>dispatch(action)=>reducer=>store=>view
//       异步action=>中间件middleware处理生成新的newAction=>手动dispatch(newAction)=>reducer=>store=>view