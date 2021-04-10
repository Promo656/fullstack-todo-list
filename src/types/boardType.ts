import {ADD_NEW_BOARD, DELETE_BOARD, RENAME_BOARD, SET_BOARDS} from "../const/const";
import {Dispatch} from "redux";

export type BoardType = {
    date: string
    title: string
    __v: number
    _id: string
}

export type BoardThunkDispatch = Dispatch<BoardActionsType>

export type BoardActionsType = AddNewBoardAT | SetBoardsAT | DeleteBoardAT | RenameBoardAT

export type AddNewBoardAT = {
    type: typeof ADD_NEW_BOARD,
    payload: BoardType
}

export type SetBoardsAT = {
    type: typeof SET_BOARDS
    payload: BoardType[]
}

export type DeleteBoardAT = {
    type: typeof DELETE_BOARD,
    payload: { boardId: string }
}

export type RenameBoardAT = {
    type: typeof RENAME_BOARD,
    payload: { boardId: string, newTitle: string }
}