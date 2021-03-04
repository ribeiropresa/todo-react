import React, { Component } from 'react'

import AddTodo from './components/AddTodo'
import Header from './components/layout/Header'
import Todos from './components/Todos'

import axios from 'axios'
import './App.css'

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=15')
      .then(res => this.setState({ todos: res.data }))
  }

// Add Todos
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({ todos: 
        [...this.state.todos, res.data] }))
  } 

// Toggle complete Todo
  toggleComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }) })
  }

// Delete Todo
  deleteTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: 
        [...this.state.todos.filter(todo => todo.id !== id)] }))
   }

  render() {
    return (
        <div>
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos 
            todos={this.state.todos} 
            toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo} 
          />
        </div>
    )
  }
}

export default App

