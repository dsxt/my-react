import React, { Component } from 'react'
let add0 = (x,y)=>{
    return x+y;
}
// let add = (x)=>{
//     return (y)=>{
//         return x+y;
//     }
// }
// add(1)(2);//add为高阶函数,高阶组件是类似的
// 把add0改写成add的方式叫函数柯里化(Currying)：优点=>1.参数复用、2. 提前确认、3. 延迟运行
// 函数柯里化带来的性能问题：
// 存取arguments对象通常要比存取命名参数要慢一点
// 一些老版本的浏览器在arguments.length的实现上是相当慢的
// 使用fn.apply( … ) 和 fn.call( … )通常比直接调用fn( … ) 稍微慢点
// 创建大量嵌套作用域和闭包函数会带来花销，无论是在内存还是速度上
// 备注：在大部分应用中，主要的性能瓶颈是在操作DOM节点上，这js的性能损耗基本是可以忽略不计的
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
