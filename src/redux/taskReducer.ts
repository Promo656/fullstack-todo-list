import {v1} from "uuid"
import {TaskType} from "../types/taskType";
import {ADD_NEW_TASK} from "../const/const";

type InitialStateTaskType = {
    [key: string]: TaskType[]
}
type TaskReducerAT = ReturnType<typeof addNewTask>

let initialState: InitialStateTaskType = {
    /*    "todoList1": [
            {
                text: "Task 1",
                id: "task1",
                todoListId: "todoList1"
            },
            {
                text: "Task 2",
                id: "task2",
                todoListId: "todoList1"
            },
            {
                text: "Task 3",
                id: "task3",
                todoListId: "todoList1"
            }
        ],
        "todoList2": [
            {
                text: "Task 1",
                id: "task1",
                todoListId: "todoList2"
            },
            {
                text: "Task 2",
                id: "task2",
                todoListId: "todoList2"
            }
        ]*/
}


export const tasks = (state: InitialStateTaskType = initialState, action: TaskReducerAT) => {
    switch (action.type) {
        case ADD_NEW_TASK:
            debugger
            return {
                ...state,
                [action.payload.task.todoListId]: [
                    ...state[action.payload.task.todoListId],
                    action.payload.task
                ]
            }
        default :
            return state
    }
}

export const addNewTask = (task: TaskType) => {
    debugger
    return {
        type: ADD_NEW_TASK,
        payload: {task}
    }
}
