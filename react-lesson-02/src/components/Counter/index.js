import React, { Component } from 'react'
import {CountConsumer} from '../../countStore'

export default class Counter extends Component {
    render() {
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
