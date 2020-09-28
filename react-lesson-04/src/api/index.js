import axios from 'axios'
import apis from './apis'

const ajax =axios.create({
    baseURL:apis.baseURL
})

export const getPosts = ()=>{
    return ajax.get(apis.posts)
}