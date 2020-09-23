import React, { Component } from 'react'
import ToDoItem from './TodoItem'
import PropTypes from 'prop-types'

export default class TodoList extends Component {
    static propTypes = {
        todos:PropTypes.arrayOf(PropTypes.shape({
            id:PropTypes.number.isRequired,
            title:PropTypes.string.isRequired,
            completed:PropTypes.bool.isRequired
        })),
        onCompletedChange:PropTypes.func
    }
    render() {
        const {
            todos,
            onCompletedChange
        } = this.props
        return (
            <ul>
                {
                    todos.map(item=>{
                        return <ToDoItem onCompletedChange={onCompletedChange} key={item.id} {...item} />
                    })
                }
                
            </ul>
        )
    }
}
