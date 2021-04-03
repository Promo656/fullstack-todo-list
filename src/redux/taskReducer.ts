import {v1} from "uuid"
import {TaskType} from "../types/taskType";
import {ADD_NEW_TASK} from "../const/const";

type InitialStateTaskType = {
    [key: string]: TaskType[]
}
type TaskReducerAT = ReturnType<typeof addNewTask>

let initialState: InitialStateTaskType = {
    "todoList1": [
        {
            text: "Task 1",
            id: "task1",
            todoListId: "todoList1"
        }
    ]
}


export const tasks = (state: InitialStateTaskType = initialState, action: TaskReducerAT) => {
    switch (action.type) {
        case ADD_NEW_TASK:
            return {
                ...state,
                [action.payload.task.todoListId]: [
                    action.payload.task,
                    ...state[action.payload.task.todoListId]
                ]
            }
        default :
            return state
    }
}

export const addNewTask = (task: TaskType) => ({
    type: ADD_NEW_TASK,
    payload: {task}
})
