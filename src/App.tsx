import React, {useState} from 'react';
import {v1} from 'uuid';
import './App.css';
import {Todolist} from './Todolist';


export type FiltersType = "all" | "active" | "completed"
type TodolistType = {
    id: string
    title: string
    filter: FiltersType
}

function App() {

    const [tasks, setTasks] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "API", isDone: true}
    ])

    const [todolists, setTodolists] = useState<TodolistType[]>([
        {
            id: v1(),
            title: "What to learn",
            filter: "all"
        },
        {
            id: v1(),
            title: "What to buy",
            filter: "all"
        }
    ])

    let [filter, setFilter] = useState<FiltersType>("all")
    let taskForTodolist = tasks
    if (filter === "active") {
        taskForTodolist = tasks.filter(t => t.isDone === false)
    }
    if (filter === "completed") {
        taskForTodolist = tasks.filter(t => t.isDone === true)
    }

    const addTask = (title: string) => {
        const task = {id: v1(), isDone: false, title: title}
        const newTasks = [task, ...tasks]
        setTasks(newTasks)
    }
    const removeTask = (id: string) => {
        setTasks(tasks.filter(t => t.id !== id))
    }
    const changeFilter = (value: FiltersType) => {
        setFilter(value)
    }
    const changeStatus = (id: string, isDone: boolean) => {
        let task = tasks.find(t => t.id === id)
        if (task) {
            task.isDone = isDone
            setTasks([...tasks])
        }
    }

    return (
        <div className="App">
            {
                todolists.map(tl => {
                    return <Todolist
                        key={tl.id}
                        title={tl.title}
                        filter={tl.filter}
                        tasks={taskForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeStatus={changeStatus}
                    />
                })
            }
        </div>
    );
}

export default App;
