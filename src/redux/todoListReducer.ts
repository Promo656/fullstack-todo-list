import {v1} from "uuid"
import {TodoListType} from "../types/todoListType";

type InitialStateType = TodoListType[]

let initialState: InitialStateType = [
    {
        id: v1(),
        title: "First todoList"
    },
    {
        id: v1(),
        title: "Second todoList"
    },
    {
        id: v1(),
        title: "Third todoList"
    }
]

export const todoLists = (state: InitialStateType = initialState, action: any) => {
    switch (action.type) {
        default :
            return state
    }
}