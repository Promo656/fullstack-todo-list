import {v1} from "uuid"
import {Taskype} from "../types/taskType";

type InitialStateType = Taskype[]

let initialState: InitialStateType = [
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

export const tasks = (state: InitialStateType = initialState, action: any) => {
    switch (action.type) {
        default :
            return state
    }
}