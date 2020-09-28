import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'

class BackHome extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>{
                    this.props.history.push("/")
                }}>组件式返回按钮</button>
            </div>
        )
    }
}
export default withRouter(BackHome)