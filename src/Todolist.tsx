import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FiltersType} from "./App";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}
type TodolistPropsType = {
    title: string
    tasks: Array<TaskType>
    filter: FiltersType
    removeTask: (id: string) => void
    changeFilter: (value: FiltersType) => void
    addTask: (title: string) => void
    changeStatus: (id: string, isDone: boolean) => void
}

export function Todolist(props: TodolistPropsType) {

    const [title, setTitle] = useState("")
    const [error, setError] = useState<string | null>(null)

    const addTask = () => {
        if (title.trim() !== "") {
            props.addTask(title)
            setTitle("")
        } else {
            setError("Title is required")
        }
    }
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        event.code === "Enter" && addTask()
    }
    const onFilterHandler = (value: FiltersType) => props.changeFilter(value)


    return <div>
        <h3>{props.title}</h3>
        <div>
            <input
                value={title}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}
                className={error ? "error" : ""}
            />
            <button onClick={addTask}>+</button>
            {error && <div className="error-message">{error}</div>}
        </div>
        <ul>
            {
                props.tasks.map(t => {
                        const removeTask = () => props.removeTask(t.id)
                        const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
                            const newIsDoneValue = event.target.checked
                            props.changeStatus(t.id, newIsDoneValue)
                        }

                        return <li key={t.id} className={t.isDone ? "is-done" : ""}>
                            <input
                                type="checkbox"
                                checked={t.isDone}
                                onChange={onChangeHandler}
                            />
                            <span>{t.title}</span>
                            <button onClick={removeTask}>X</button>
                        </li>
                    }
                )
            }
        </ul>
        <div>
            <button className={props.filter === "all" ? "active-filter" : ""}
                    onClick={() => onFilterHandler("all")}>All
            </button>
            <button className={props.filter === "active" ? "active-filter" : ""}
                    onClick={() => onFilterHandler("active")}>Active
            </button>
            <button className={props.filter === "completed" ? "active-filter" : ""}
                    onClick={() => onFilterHandler("completed")}>Completed
            </button>
        </div>
    </div>
}
