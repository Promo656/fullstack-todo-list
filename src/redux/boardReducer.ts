import {BoardType} from "../types/boardType";
import {ADD_NEW_BOARD, SET_BOARDS} from "../const/const";
import {todoListsAPI} from "../api/todoListApi";


type ActionsType =
    AddNewBoardAT
    | SetBoardsAT
type InitialStateBoardsType = BoardType[]

let initialState: InitialStateBoardsType = []

export const boards = (state: InitialStateBoardsType = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_NEW_BOARD:
            return [
                ...state,
                action.payload
            ]
        case SET_BOARDS:
            return [
                ...state,
                ...action.payload
            ]
        default :
            return state
    }
}

export type AddNewBoardAT = {
    type: typeof ADD_NEW_BOARD,
    payload: string
}
export const addNewBoard = (title: string) => ({
    type: ADD_NEW_BOARD,
    payload: title
})

export type SetBoardsAT = {
    type: typeof SET_BOARDS
    payload: BoardType[]
}

export const fetchBoards = () => async (dispatch: any) => {
    todoListsAPI.getBoards()
        .then(response => {
            dispatch(setBoards(response.data))
        })
}

export const setBoards = (boards: BoardType[]): SetBoardsAT => ({
    type: SET_BOARDS,
    payload: boards
})
