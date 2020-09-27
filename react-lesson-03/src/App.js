import React, { Component } from 'react'

import { CartList } from './components'

class App extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <CartList store={this.props.store} />
            </div>
        )
    }
}
export default App