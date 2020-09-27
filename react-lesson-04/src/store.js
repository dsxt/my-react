import { createStore } from 'redux'
import rootReducers from './reducers'

export default createStore(rootReducers)

// Redux 可以用这三个基本原则
// 1.单一数据源
// 整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中
// 2.State 是只读的
// 唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象
// 3.使用纯函数来执行修改
// 为了描述 action 如何改变 state tree ，你需要编写 reducers

// 总结：
// 1.为了方便管理先建立
// store.js:
// 先下载引入redux（yarn add redux -S），通过createStore创建实例
// actions:
// 建立actionType.js(避免重复)统一管理状态
// 创建方法（可以传参，约定成俗第二个参数用payload）
// reducers:
// 注意用combineReducers合并引入的reducers
// 创建方法并在switch里对对应的action.type做相应处理，并返回新的state
// 2.在视图层创建store.subscribe，对获取store.getState的事件做监听