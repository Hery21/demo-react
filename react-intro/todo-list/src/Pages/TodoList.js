import React, { Component } from 'react'
import InputTodo from "../Components/InputTodo";
import ListWrapper from "../Components/ListWrapper";

import './TodoList.css'

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: true,
            value: '',
            todoList: [
                'Bangun',
                'Mandi',
                'Sarapan',
                'Pesan Grab',
                'Kerja'
            ]
        }
        // harus bind "this" agar bisa menggunakan method Class
        this.increment = this.increment.bind(this)
        this.logIn = this.logIn.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        console.log('Constructor running')
    }

    handleChange(event) {
        // console.log(event)
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        // const value = 'mandi sore'
        const { value } = this.state
        // const value = this.state.value
        // Cara 1: Menambahkan array dengan Spread Operator
        this.setState({
            todoList: [...this.state.todoList, value],
            value: ''
        })

        // agar halaman tidak reload
        event.preventDefault()
    }

    increment(){
        // this = Component.this
        this.setState({
            value: this.state.value + 1
        })
    }

    logIn(){
        this.setState({
            isLoggedIn: true
        })
    }

    componentDidMount() {
        console.log('componentDidMount running')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate running')
    }

    render() {
        const { todoList, value, isLoggedIn } = this.state
        // console.log(todoList)
        console.log('Render running')
        return (
            <>
                <h1>Todo List</h1>
                {/*<hr/>*/}
                {
                    isLoggedIn ?
                        (
                            <div className='wrapper-todo'>
                                <InputTodo handleSubmit={this.handleSubmit} value={value} handleChange={this.handleChange} />
                                <ListWrapper todoList={todoList} value={value} />
                            </div>
                        ) :
                        (
                            <>
                                <p>Need to logged in first!</p>
                                <button onClick={this.logIn}>Log In</button>
                            </>
                        )
                }
            </>
        );
    }
}

export default TodoList;
