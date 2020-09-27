import actionType from '../actions/actionType'
const initState = [
    {
        id:1,
        name:'苹果',
        price:'4',
        amount:10
    },{
        id:2,
        name:'香蕉',
        price:'2.3',
        amount:20
    },
]
// 根据action的不同做不同处理，返回一个新的state，返回类型要一致
export default (state=initState,action)=>{
    switch(action.type){
        case actionType.CART_AMOUNT_INCREMENT:
            return state.map(item=>{
                if(item.id === action.payload.id){
                    item.amount += 1
                }
                return item
            })
            case actionType.CART_AMOUNT_DECREMENT:
                return state.map(item=>{
                    if(item.id === action.payload.id){
                        if(item.amount === 0){
                            item.amount = 0
                        }else{
                            item.amount -= 1
                        }
                    }
                    return item
                })
        default:
            return state
    }
}