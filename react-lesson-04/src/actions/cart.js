import actionType from './actionType'

// 第一种写法,不能动态的传递参数
// export const increment = {
//     type:actionType.CART_AMOUNT_INCREMENT,
//     payload:{
//         id
//     }
// }
// 第二种写法,居多
export const increment = (id)=>{
    return {
        type:actionType.CART_AMOUNT_INCREMENT,
        payload:{
            id
        }
    }
}

// 异步action
// 使用redux-thunk，就可以在action里return一个方法，方法的参数是dispatch
export const incrementAsync = (id)=>{
    return dispatch=>{
        setTimeout(()=>{
            dispatch(increment(id))
        },2000)
    }
    }

export const decrement = (id)=>{
    return {
        type:actionType.CART_AMOUNT_DECREMENT,
        payload:{
            id
        }
    }
}