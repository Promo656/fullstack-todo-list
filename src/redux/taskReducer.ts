import {v1} from "uuid"
import {TaskType} from "../types/taskType";
import {ADD_NEW_TASK} from "../const/const";

type InitialStateTaskType = {
    tasks: TaskType[]
}

let initialState: InitialStateTaskType = {
    tasks: [
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
}

export const tasks = (state: InitialStateTaskType = initialState, action: any) => {
    switch (action.type) {
        case ADD_NEW_TASK:
            return {
                ...state,
                tasks: [
                    ...state.tasks
                ]
            }
        default :
            return state
    }
}

type AddNewTaskAT = {
    type: typeof ADD_NEW_TASK,
    payload: TaskType
}
export const addNewTask = ({id, text}: TaskType): AddNewTaskAT => ({
    type: ADD_NEW_TASK,
    payload: {text, id}
})