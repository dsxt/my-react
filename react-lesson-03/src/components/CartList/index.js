import React, { Component } from 'react'

import { increment,decrement } from '../../actions/cart'

export default class CartList extends Component {
    constructor(){
        super()
        this.state = {
            cartList:[]
        }
    }
    getState = ()=>{
        this.setState({
            cartList:this.props.store.getState().cart
        })
    }
    componentDidMount(){
        this.getState()
        this.props.store.subscribe(this.getState)
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
                        this.state.cartList.map(item=>{
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <button onClick={
                                            ()=>{
                                                this.props.store.dispatch(decrement(item.id))
                                            }
                                        }>-</button>
                                        <span>{item.amount}</span>
                                        <button onClick={
                                            ()=>{
                                                this.props.store.dispatch(increment(item.id))
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
