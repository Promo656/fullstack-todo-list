import {BoardType} from "../types/boardType";
import {v1} from "uuid"
import {ADD_NEW_BOARD} from "../const/const";

type ActionsType = ReturnType<typeof addNewBoard>
type InitialStateBoardsType = BoardType[]

let initialState: InitialStateBoardsType = [

]

export const boards = (state: InitialStateBoardsType = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_NEW_BOARD:
            return [
                ...state,
                action.payload.board
            ]
        default :
            return state
    }
}

export const addNewBoard = (board: BoardType) => ({
    type: ADD_NEW_BOARD,
    payload: {board}
})