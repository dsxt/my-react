import React, { Component } from 'react'
import withCopyRight from './withCopyRight'

@withCopyRight
class Another extends Component {
    render() {
        return (
            <div>
                Another {this.props.name}
            </div>
        )
    }
}
export default Another
// 装饰器写法等价于withCopyRight(Another),便于阅读a(b(c(d(Another))))