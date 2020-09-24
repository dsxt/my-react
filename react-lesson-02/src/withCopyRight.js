import React, { Component } from 'react'
// let add = (x)=>{
//     return (y)=>{
//         return x+y;
//     }
// }
// add(1)(2);//add为高阶函数,高阶组件是类似的
// HOC高阶组件（Higher-order component）
const aa = (YourComponent)=>{
    return class withCopyRight extends Component {
        render() {
            return (
                <div>
                    <YourComponent {...this.props} />
                    这是高阶组件的内容
                </div>
            )
        }
    }
}
export default aa
