import React, { Component } from 'react'
import {CountConsumer} from '../../countStore'

export default class CountBtn extends Component {
    render() {
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
