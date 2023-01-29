import './InputTodo.css'

const InputTodo = props => {
    const {handleSubmit, value, handleChange} = props
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={handleChange} placeholder='Insert todo here..'/>
                <input type="submit" value="Submit" />
            </form>
            <hr />
        </>
    )
}

export default InputTodo;
