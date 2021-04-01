import {v1} from "uuid"
import {TodoListType} from "../types/todoListType";

type InitialStateTodoListType = TodoListType[]

let initialState: InitialStateTodoListType = [
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

export const todoLists = (state: InitialStateTodoListType = initialState, action: any) => {
    switch (action.type) {
        default :
            return state
    }
}