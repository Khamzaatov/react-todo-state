import { useState } from "react";


const Main = ({text, setText, addTodo, setBlur, blur}) => {

    const [empty, setEmpty] = useState(true)

    const handleText = (e) => {;
        setText(e.target.value)
        setBlur(false)
        setEmpty(true)
      }


    const handleSubmit = (e) => {
        e.preventDefault()
        setEmpty(true)
     }

    const handleBlur = (e) => {
        if (!e.target.value) {
            setBlur(true)
        }
     }


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onBlur={handleBlur} value={text} onChange={handleText} placeholder="Введите текст..."/>
            <button type="submit"  onClick={addTodo}>Отправить</button>

            {(empty && blur) ? <div className='is-error'>Поле ввода не должно быть пустым!</div> : null}
        </form>
        
    );
};

export default Main;