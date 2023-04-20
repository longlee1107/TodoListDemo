import React, { useState } from "react";
import './TodoList.css';

const TodoList = () => {
    const [valueInput, setValueInput] = useState('')
    //const [progress, setProgress] = useState('')
    const [progressInput, setProgressInput] = useState(0)

    const [todos, setTodos] = useState([
        { id: 1, value: 'Lau nha', progress: '50' },
        { id: 2, value: 'Di choi', progress: '75' },
    ])

    const handleOnchangeValue = (e) => {
        setValueInput(e.target.value)
    }

    const handleOnchangeProgress = (e) => {
        setProgressInput(e.target.value)
    }

    const handleAddTodo = () => {
        setValueInput('')
        const newTodo = {
            id: todos.length + 1,
            value: valueInput,
            progress: progressInput,
        }
        setTodos([...todos, newTodo])
    }


    return (
        <div className="container">
            <div className="containerAdd">
                <div className="InputArea">
                    <input className="inputAdd" type="text" placeholder="Add new todo" value={valueInput} onChange={handleOnchangeValue} />
                    <input className="inputProgress" min='0' max='100' type="number" placeholder="%" value={progressInput} onChange={handleOnchangeProgress} />
                </div>
                <button onClick={handleAddTodo}>Add todo</button>
            </div>
            <div className="containerLists">
                {todos && todos.map((item) => {
                    return (
                        <div key={item.id} className="containerList">
                            <div className="List">{item.value}</div>
                            <div className="containerProgress">
                                <div className="Progress">
                                    <div style={{
                                        maxWidth: `${item.progress}%`
                                    }} className="ProgressValue"></div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TodoList