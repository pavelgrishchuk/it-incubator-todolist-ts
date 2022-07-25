import React, {useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";
export type FilterValuesType = "all" | "active" | "completed"

function App() {
    const title: string = "What to learn"

    const [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS/ES6", isDone: true},
        {id: 3, title: "REACT", isDone: false},
    ])
    const removeTask = (taskID: number) => {
        const updatedTasks = tasks.filter(task => task.id !== taskID)
        setTasks(updatedTasks)
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
            />
        </div>
    );
}

export default App;
