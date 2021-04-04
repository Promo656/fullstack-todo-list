import {TodoListType} from "../types/todoListType";
import {ADD_NEW_BOARD, ADD_NEW_TODOLIST, CHANGE_TODO_LIST_TITLE} from "../const/const";
import {AddNewBoardAT} from "./boardReducer";

export type AddNewTodoListAT = ReturnType<typeof addNewTodoList>
type ChangeTodoListTitleAT = ReturnType<typeof changeTodoListTitle>
type ActionsType =
    AddNewTodoListAT
    & AddNewBoardAT
    & ChangeTodoListTitleAT

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
                [action.payload.todoList.boardId]: [...state[action.payload.todoList.boardId], action.payload.todoList]
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
export const changeTodoListTitle = (boardId: string, todoListId: string, newTodoListTitle: string) => {
    return {
        type: CHANGE_TODO_LIST_TITLE,
        payload: {boardId, todoListId, newTodoListTitle}
    }
}