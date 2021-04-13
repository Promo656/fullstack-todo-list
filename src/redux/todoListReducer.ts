import {
    AddNewTodoListAT,
    ChangeTodoListTitleAT,
    DeleteTodoListAT,
    SetTodoListsAT,
    TodoListActionsType,
    TodoListThunkDispatch,
    TodoListType
} from "../types/todoListType";
import {
    ADD_NEW_BOARD,
    ADD_NEW_TODOLIST,
    DELETE_BOARD,
    DELETE_TODOLIST,
    RENAME_TODO_LIST_TITLE,
    SET_BOARDS,
    SET_TODO_LISTS
} from "../const/const";
import {todoListsAPI} from "../api/todoListApi";


type InitialStateTodoListType = {
    [key: string]: TodoListType[]
}

let initialState: InitialStateTodoListType = {
    /* "Board1": [
         {
             date: "12.12.12",
             title: "New TodoList",
             boardId: "dfef44",
             __v: 4535,
             _id: "eff3fr3",
         }
     ]*/
}

export const todoLists = (state: InitialStateTodoListType = initialState, action: TodoListActionsType) => {
    switch (action.type) {
        case ADD_NEW_TODOLIST:
            return {
                ...state,
                [action.payload.boardId]: [...state[action.payload.boardId], action.payload]
            }
        case DELETE_TODOLIST:
            return {
                ...state,
                [action.payload.boardId]: state[action.payload.boardId].filter(el => el._id !== action.payload.todoListId)
            }
        case RENAME_TODO_LIST_TITLE:
            return {
                ...state,
                [action.payload.boardId]: state[action.payload.boardId]
                    .map(el =>
                        el._id === action.payload.todoListId
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
                [action.payload._id]: []
            }
        case SET_BOARDS: {
            const copyState = {...state}
            action.payload.forEach(board => {
                copyState[board._id] = []
            })
            return copyState
        }
        case DELETE_BOARD:
            const copyState = {...state}
            delete copyState[action.payload.boardId]
            return copyState
        case SET_TODO_LISTS:
            const result = {} as InitialStateTodoListType
            action.payload.forEach(el => {
                if (!result[el.boardId]) {
                    result[el.boardId] = [el]
                } else {
                    result[el.boardId].push(el)
                }
            })
            return {
                ...state,
                ...result
            }
        default :
            return state
    }
}


export const addNewTodoList = (todoList: TodoListType): AddNewTodoListAT => ({
    type: ADD_NEW_TODOLIST,
    payload: todoList
})

export const deleteTodoList = (boardId: string, todoListId: string): DeleteTodoListAT => ({
    type: DELETE_TODOLIST,
    payload: {boardId, todoListId}
})

export const changeTodoListTitle = (boardId: string, todoListId: string, newTodoListTitle: string): ChangeTodoListTitleAT => ({
    type: RENAME_TODO_LIST_TITLE,
    payload: {boardId, todoListId, newTodoListTitle}
})

export const setTodoList = (todoLists: TodoListType[]): SetTodoListsAT => ({
    type: SET_TODO_LISTS,
    payload: todoLists
})

export const fetchTodoListsTC = () => async (dispatch: TodoListThunkDispatch) => {
    const response = await todoListsAPI.getTodoLists()
    dispatch(setTodoList(response.data))
}

export const addNewTodoListTC = (boardId: string, title: string) => async (dispatch: TodoListThunkDispatch) => {
    const response = await todoListsAPI.addNewTodoList(boardId, title)
    dispatch(addNewTodoList(response.data))
}

export const deleteTodoListTC = (boardId: string, todoListId: string) => async (dispatch: TodoListThunkDispatch) => {
    await todoListsAPI.deleteAllTaskFromTodoList(todoListId)
    await todoListsAPI.deleteOneTodoList(todoListId)
    dispatch(deleteTodoList(boardId, todoListId))
}

export const renameTodoListTC = (boardId: string, todoListId: string, newTodoListTitle: string) => async (dispatch: TodoListThunkDispatch) => {
    await todoListsAPI.renameTodoList(todoListId, newTodoListTitle)
    dispatch(changeTodoListTitle(boardId, todoListId, newTodoListTitle))
}