import { VscChromeClose} from 'react-icons/vsc';

const Todo = ({todos, setTodos}) => {
   
  const todosDelete = (id) => {
    const remove = todos.filter((el, index) => {
      if (id === index) {
        return false
      }
      return true
    })
    setTodos(remove)
  }
  
  return (
    <div className="list">
        {todos.map((el, index) => {
            return (
              <div className="todo-text">{el.text}
               <VscChromeClose  onClick={() => todosDelete(index)}  style={{cursor : 'pointer'}} className='todo-delete'/></div>  
            )
          })}
          </div>
    );
};

export default Todo;