import {Dispatch} from "redux";
import {AddNewBoardAT, DeleteBoardAT, SetBoardsAT} from "./boardType";

import {ADD_NEW_TODOLIST, DELETE_TODOLIST, RENAME_TODO_LIST_TITLE, SET_TODO_LISTS} from "../const/const";

export type TodoListType = {
    date: string
    title: string
    boardId: string
    __v: number
    _id: string
}

export type TodoListThunkDispatch = Dispatch<TodoListActionsType>

export type TodoListActionsType =
    AddNewTodoListAT
    | AddNewBoardAT
    | ChangeTodoListTitleAT
    | SetBoardsAT
    | SetTodoListsAT
    | DeleteBoardAT
    | DeleteTodoListAT

export type AddNewTodoListAT = {
    type: typeof ADD_NEW_TODOLIST,
    payload: TodoListType
}

export type DeleteTodoListAT = {
    type: typeof DELETE_TODOLIST,
    payload: { boardId: string, todoListId: string }
}

export type ChangeTodoListTitleAT = {
    type: typeof RENAME_TODO_LIST_TITLE,
    payload: { boardId: string, todoListId: string, newTodoListTitle: string }
}

export type SetTodoListsAT = {
    type: typeof SET_TODO_LISTS,
    payload: TodoListType[]
}