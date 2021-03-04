import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <div className='bg-secondary text-info d-flex justify-content-center mb-4'>
                <h1 className='mt-2 mb-2'>Todo List</h1>
            </div>
        )
    }
}

export default Header
