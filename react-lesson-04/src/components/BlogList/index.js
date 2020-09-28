import React, { Component } from 'react'
import { connect } from 'react-redux'
import BlogItem from './blogItem'
import { fetchBlogList } from '../../actions/blog'

class BlogList extends Component {
    componentDidMount(){
        this.props.fetchBlogList()
    }
    render() {
        const {
            list,
            isLoading
        } = this.props
        return (
            <ul>
                {
                    isLoading
                    ?
                    <div>loading</div>
                    :
                    list.map(item=>{
                        return (
                            <BlogItem key={item.id} {...item} />
                        )
                    })
                }
            </ul>
        )
    }
}
const mapState = state=>({
    list:state.blog.list,
    isLoading:state.blog.isLoading
})
export default connect(mapState,{ fetchBlogList })(BlogList)