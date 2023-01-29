import Todo from './Todo'

const ListWrapper = (props) => {
    // props.todoList
    // console.log(props)
    const { todoList } = props
    return (
       <>
           <h3>Existing Todo:</h3>
           <ul>
               {
                   todoList.map((item, index) => <Todo key={index} item={item} />)
               }
           </ul>
       </>
    )
}

export default ListWrapper
