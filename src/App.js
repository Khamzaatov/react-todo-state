import { useState } from "react";
import Main from "./components/Main";
import Todo from "./components/Todo";
import './style.css'

function App() {

  const toDo = [
    {
      text: 'JavaScript',
      completed : false
    },

    {
      text: 'TypeScript',
      completed : false
    },

    {
      text: 'PHP',
      completed : false
    },
    
  ]

  const [text, setText] = useState('')
  const [todos, setTodos] = useState(toDo)
  const [blur, setBlur] = useState(false)
  

  const addTodo = () => {
    if(text.length < 1) {
      setText(text.trim())
    } else {
      setTodos([
        ...todos,
        {
        text: text,
        completed: false
      }])

      
    }
    setText('')
  }

  return (
    <div className="App">
      <Main setText={setText} text={text} addTodo={addTodo} setBlur={setBlur} blur={blur}/>
      <Todo todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
