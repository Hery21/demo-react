import './Todo.css'

const Todo = props => {
    const {item} = props
    return (
        <li>{item}</li>
    )
}

export default Todo
