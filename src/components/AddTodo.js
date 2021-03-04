import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AddTodo extends Component {
    state = {
        title: ''
    }

    addTodo = (e) => this.setState({ [e.target.name]: e.target.value });

    submitAddTodo = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title)
        this.setState({ title: '' })
    }

    render() {
        return (
            <form 
                className='input-group flex-nowrap mb-4'
                onSubmit={this.submitAddTodo}
            >
                <input 
                    type='text' 
                    className='form-control text-info ml-2' 
                    name='title'
                    placeholder='Add Todo...'
                    value={this.state.title}
                    onChange={this.addTodo}
                ></input>
                <button 
                    type="submit" 
                    className="btn btn-info ml-1 mr-2"
                >ADD TODO</button>               
            </form>
        )
    }
}

// PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

export default AddTodo
