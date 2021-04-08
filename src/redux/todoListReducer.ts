import {TodoListType} from "../types/todoListType";
import {ADD_NEW_BOARD, ADD_NEW_TODOLIST, CHANGE_TODO_LIST_TITLE, SET_BOARDS} from "../const/const";
import {AddNewBoardAT, SetBoardsAT} from "./boardReducer";


type ActionsType =
    AddNewTodoListAT
    | AddNewBoardAT
    | ChangeTodoListTitleAT
    | SetBoardsAT

type InitialStateTodoListType = {
    [key: string]: TodoListType[]
}

let initialState: InitialStateTodoListType = {
    /* "Board1": [
         {
             boardId: "Board1",
             id: "TodoList1",
             title: "New todoList"
         }
     ]*/
}

export const todoLists = (state: InitialStateTodoListType = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_NEW_TODOLIST:
            return {
                ...state,
                [action.payload.boardId]: [...state[action.payload.boardId], action.payload]
            }
        case CHANGE_TODO_LIST_TITLE:
            return {
                ...state,
                [action.payload.boardId]: state[action.payload.boardId]
                    .map(el =>
                        el.id === action.payload.todoListId
                            ? {
                                ...el,
                                title: action.payload.newTodoListTitle
                            }
                            : el
                    )
            }
        case ADD_NEW_BOARD:
            return {
                ...state,
                [action.payload]: []
            }
        case SET_BOARDS:

            const newState = action.payload.map(el =>
                state[el._id] = []
            )
            return {
                ...state,

            }
        default :
            return state
    }
}

export type AddNewTodoListAT = {
    type: typeof ADD_NEW_TODOLIST,
    payload: TodoListType
}
export const addNewTodoList = (todoList: TodoListType): AddNewTodoListAT => ({
    type: ADD_NEW_TODOLIST,
    payload: todoList
})

type ChangeTodoListTitleAT = {
    type: typeof CHANGE_TODO_LIST_TITLE,
    payload: { boardId: string, todoListId: string, newTodoListTitle: string }
}
export const changeTodoListTitle = (boardId: string, todoListId: string, newTodoListTitle: string) => {
    return {
        type: CHANGE_TODO_LIST_TITLE,
        payload: {boardId, todoListId, newTodoListTitle}
    }
}