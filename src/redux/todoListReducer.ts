import {v1} from "uuid"
import {TodoListType} from "../types/todoListType";

type InitialStateTodoListType = TodoListType

let initialState: InitialStateTodoListType = {
    "Board1":
        {
            id: "todoList1",
            title: "TodoList 1",
            boardId: "Board1"
        }
}

export const todoLists = (state: InitialStateTodoListType = initialState, action: any) => {
    switch (action.type) {
        default :
            return state
    }
}