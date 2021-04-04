import {TodoListType} from "../types/todoListType";
import {ADD_NEW_BOARD, ADD_NEW_TODOLIST} from "../const/const";
import {AddNewBoardAT} from "./boardReducer";

export type AddNewTodoListAT = ReturnType<typeof addNewTodoList>
type ActionsType = AddNewTodoListAT & AddNewBoardAT

type InitialStateTodoListType = {
    [key: string]: TodoListType[]
}

let initialState: InitialStateTodoListType = {}

export const todoLists = (state: InitialStateTodoListType = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_NEW_TODOLIST:
            return {
                ...state,
                [action.payload.todoList.boardId]: [...state[action.payload.todoList.boardId], action.payload.todoList]
            }
        case ADD_NEW_BOARD:
            return {
                ...state,
                [action.payload.board.id]: []
            }
        default :
            return state
    }
}

export const addNewTodoList = (todoList: TodoListType) => ({
    type: ADD_NEW_TODOLIST,
    payload: {todoList}
})