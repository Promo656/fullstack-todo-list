import {BoardType} from "../types/boardType";
import {ADD_NEW_BOARD, DELETE_BOARD, RENAME_BOARD, SET_BOARDS} from "../const/const";
import {todoListsAPI} from "../api/todoListApi";
import {Dispatch} from "redux";

type ThunkDispatch = Dispatch<ActionsType>

type ActionsType =
    AddNewBoardAT
    | SetBoardsAT
    | DeleteBoardAT
    | RenameBoardAT

type InitialStateBoardsType = BoardType[]

let initialState: InitialStateBoardsType = []

export const boards = (state: InitialStateBoardsType = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_NEW_BOARD:
            return [
                ...state,
                action.payload
            ]
        case RENAME_BOARD:
            return state.map(board => board._id === action.payload.boardId
                ? {
                    ...board,
                    title: action.payload.newTitle
                }
                : board
            )
        case DELETE_BOARD:
            return state.filter(board => board._id !== action.payload.boardId)
        case SET_BOARDS:
            return [
                ...action.payload
            ]
        default :
            return state
    }
}

export type AddNewBoardAT = {
    type: typeof ADD_NEW_BOARD,
    payload: BoardType
}
export const addNewBoard = (board: BoardType): AddNewBoardAT => ({
    type: ADD_NEW_BOARD,
    payload: board
})

export type SetBoardsAT = {
    type: typeof SET_BOARDS
    payload: BoardType[]
}
export const setBoards = (boards: BoardType[]): SetBoardsAT => ({
    type: SET_BOARDS,
    payload: boards
})

export type DeleteBoardAT = {
    type: typeof DELETE_BOARD,
    payload: { boardId: string }
}
export const deleteBoard = (boardId: string): DeleteBoardAT => ({
    type: DELETE_BOARD,
    payload: {boardId}
})

export type RenameBoardAT = {
    type: typeof RENAME_BOARD,
    payload: { boardId: string, newTitle: string }
}
export const renameBoard = (boardId: string, newTitle: string): RenameBoardAT => ({
    type: RENAME_BOARD,
    payload: {boardId, newTitle}
})


export const fetchBoardsTC = () => async (dispatch: ThunkDispatch) => {
    const response = await todoListsAPI.getBoards()
    dispatch(setBoards(response.data))
}

export const addNewBoardTC = (title: string) => async (dispatch: ThunkDispatch) => {
    const response = await todoListsAPI.addNewBoard(title)
    dispatch(addNewBoard(response.data))
}

export const deleteBoardTC = (boardId: string) => async (dispatch: ThunkDispatch) => {
    await todoListsAPI.deleteBoard(boardId)
    dispatch(deleteBoard(boardId))
}

export const renameBoardTC = (boardId: string, newTitle: string) => async (dispatch: ThunkDispatch) => {
    await todoListsAPI.renameBoard(boardId, newTitle)
    dispatch(renameBoard(boardId, newTitle))
}

