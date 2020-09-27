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

export const decrement = (id)=>{
    return {
        type:actionType.CART_AMOUNT_DECREMENT,
        payload:{
            id
        }
    }
}