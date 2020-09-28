import React, { Component } from 'react'
import {BackHome} from '../../components'

export default class ArticalDetail extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                文章详情{this.props.match.params.id}
                <button onClick={()=>{
                    this.props.history.push("/")
                }}>返回首页</button>
                <BackHome />
            </div>
        )
    }
}
