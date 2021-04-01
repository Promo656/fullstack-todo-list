import {v1} from "uuid"
import {TaskType} from "../types/taskType";
import {ADD_NEW_TASK} from "../const/const";

type InitialStateTaskType = TaskType[]
type TaskReducerAT = AddNewTaskAT

let initialState: InitialStateTaskType = [

    {
        id: v1(),
        text: "First task"
    },
    {
        id: v1(),
        text: "Second task"
    },
    {
        id: v1(),
        text: "Third task"
    }
]


export const tasks = (state: InitialStateTaskType = initialState, action: TaskReducerAT) => {
    switch (action.type) {
        case ADD_NEW_TASK:
            debugger
            return {
                ...state,

            }
        default :
            return state
    }
}

type AddNewTaskAT = {
    type: typeof ADD_NEW_TASK,
    payload: TaskType
}
export const addNewTask = (id: string, text: string): AddNewTaskAT => ({
    type: ADD_NEW_TASK,
    payload: {text, id}
})