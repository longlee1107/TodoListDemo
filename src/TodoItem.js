import React, { useState } from "react";

const TodoItem = () => {
    const [value, setValue] = useState('')
    const [progress, setProgress] = useState(0)

    const handleOnchangeValue = (e) => {
        setValue(e.target.value)
    }

    const handleOnchangeProgress = (e) => {
        setProgress(e.target.value)
    }

    return (
        <div>
            <input type="text" value={value} onChange={handleOnchangeValue} />
            <input type="text" min='0' max='100' value={progress} onChange={handleOnchangeProgress} />
            <span>{progress}%</span>
        </div>
    )
}

export default TodoItem