import actionType from '../actions/actionType'
const initState = {
    list:[],
    isLoading:false
}
export default (state=initState,action)=>{
    switch(action.type){
        case actionType.START_FETCH_BLOG_LIST:
            return {
                ...state,
                isLoading:true
            }
        case actionType.FETCH_BLOG_LIST_SUCCESS:
            return {
                ...state,
                isLoading:false,
                list:action.payload.list
            }
        case actionType.FETCH_BLOG_LIST_FAILED:
            return {
                ...state,
                isLoading:false
            }
        default:
            return state;
    }
}