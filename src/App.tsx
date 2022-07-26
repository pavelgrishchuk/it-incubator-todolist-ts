import React, {useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";
import {v1} from "uuid";

export type FilterValuesType = "all" | "active" | "completed"

function App() {
    console.log(v1())
    const title: string = "What to learn"

    const [tasks, setTasks] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS/ES6", isDone: true},
        {id: v1(), title: "REACT", isDone: false},
    ])
    const removeTask = (taskID: string) => {
        const updatedTasks = tasks.filter(task => task.id !== taskID)
        setTasks(updatedTasks)
    }

    const addTask = (title: string) => {
        setTasks([{
            id: v1(),
            title: title,
            isDone: false
        }, ...tasks])
    }

    const [filter, setFilter] = useState<FilterValuesType>("all")
    let tasksForRender;
    switch (filter) {
        case "completed":
            tasksForRender = tasks.filter(t => t.isDone === true)
            break
        case "active":
            tasksForRender = tasks.filter(t => t.isDone === false)
            break
        default:
            tasksForRender = tasks
    }

    const changeFilter = (filter: FilterValuesType) => {
        setFilter(filter)

    }

    return (
        <div className="App">
            <TodoList
                title={title}
                tasks={tasksForRender}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
            />
        </div>
    );
}

export default App;
