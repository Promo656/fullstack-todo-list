import {
    AddNewBoardAT,
    BoardActionsType,
    BoardThunkDispatch,
    BoardType,
    DeleteBoardAT,
    RenameBoardAT,
    SetBoardsAT
} from "../types/boardType";
import {ADD_NEW_BOARD, DELETE_BOARD, RENAME_BOARD, SET_BOARDS} from "../const/const";
import {todoListsAPI} from "../api/todoListApi";


type InitialStateBoardsType = BoardType[]

let initialState: InitialStateBoardsType = []

export const boards = (state: InitialStateBoardsType = initialState, action: BoardActionsType) => {
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

export const addNewBoard = (board: BoardType): AddNewBoardAT => ({
    type: ADD_NEW_BOARD,
    payload: board
})


export const setBoards = (boards: BoardType[]): SetBoardsAT => ({
    type: SET_BOARDS,
    payload: boards
})


export const deleteBoard = (boardId: string): DeleteBoardAT => ({
    type: DELETE_BOARD,
    payload: {boardId}
})


export const renameBoard = (boardId: string, newTitle: string): RenameBoardAT => ({
    type: RENAME_BOARD,
    payload: {boardId, newTitle}
})


export const fetchBoardsTC = () => async (dispatch: BoardThunkDispatch) => {
    const response = await todoListsAPI.getBoards()
    dispatch(setBoards(response.data))
}

export const addNewBoardTC = (title: string) => async (dispatch: BoardThunkDispatch) => {
    const response = await todoListsAPI.addNewBoard(title)
    dispatch(addNewBoard(response.data))
}

export const deleteBoardTC = (boardId: string) => async (dispatch: BoardThunkDispatch) => {
    await todoListsAPI.deleteAllTodoListFromBoard(boardId)
    await todoListsAPI.deleteBoard(boardId)
    dispatch(deleteBoard(boardId))
}

export const renameBoardTC = (boardId: string, newTitle: string) => async (dispatch: BoardThunkDispatch) => {
    await todoListsAPI.renameBoard(boardId, newTitle)
    dispatch(renameBoard(boardId, newTitle))
}

