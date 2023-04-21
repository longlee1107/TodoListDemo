import React, { useEffect, useState } from "react";
import './TodoList.css';

const TodoList = () => {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('list')))
    const [valueInput, setValueInput] = useState('')
    const [progressInput, setProgressInput] = useState(0)


    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(todos))
    }, [todos])


    const handleOnchangeValue = (e) => {
        setValueInput(e.target.value)
    }

    const handleOnchangeProgress = (e) => {
        setProgressInput(e.target.value)
    }

    const handleAddTodo = () => {
        if (!valueInput) {
            return
        }
        setValueInput('')
        const newTodo = {
            id: todos && todos.length + 1,
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