import { useState } from "react"

function TodoApp() {
    const [tasks, setTasks] = useState([]); // Lista zadań
    const [input, setInput] = useState('');

    const addTask = () => {
        if (!input.trim()) return 
        setTasks([...tasks, {text: input, done: false}])
        setInput('')
    }
    
    const toggleTask = (index) => {
        const updated = tasks.map((task, i) => i === index ? {...task, done: !task.done} : task)
        setTasks(updated)
    }

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index)) // filtruje po indeksie i usuwa element z listy
    }


    return (
        <div className="container">
            <h1>TO-DO App</h1>

            <div className="input-group">
                <input
                    value={input}
                    onChange={(element) => setInput(element.target.value)}
                    placeholder="Dodaj zadanie"
                />
                <button onClick={addTask}>Dodaj</button>
            </div>

            <ul className="task-list">
                {tasks.map((task, index) => ( // to będzie generować dynamicznie listę HTML
                    <li key={index} className={task.done ? "done" : ""}>
                        <span onClick={() => toggleTask(index)}>{task.text}</span>
                        <button onClick={() => deleteTask(index)}>ⓧ</button>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default TodoApp