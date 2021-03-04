import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo

        return (
            <div className='text-info' id='content'>
                <div className='item-bg h5 bg-light d-flex justify-content-between mt-2 mr-2 ml-2 mb-0 pt-3 pb-3 border border-dark' id='item'>
                    <div className='title d-inline' style={this.getStyle()}>
                        <input
                            className='ml-3 mr-2'
                            type='checkbox'
                            onChange={this.props.toggleComplete.bind(this, id)} 
                        />
                        { title }
                    </div>
                    <div
                        className='btn btn-danger h5 mr-3'
                        onClick={this.props.deleteTodo.bind(this, id)}
                    >x</div>
                </div>
                <div className='d-flex justify-content-end mt-1 mr-2'>
                    <p className='d-inline'>till:</p>
                    <input 
                        type='date' 
                        className='item-date text-info border border-light'
                    />
                </div>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

export default TodoItem
