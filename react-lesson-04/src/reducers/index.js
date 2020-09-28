import { combineReducers } from 'redux'
import cart from './cart'
import blog from './blog'

// combineReducers用于合并redux，注意不要手动合并
export default combineReducers({
    cart,
    blog
})