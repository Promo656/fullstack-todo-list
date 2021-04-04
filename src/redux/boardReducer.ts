import {BoardType} from "../types/boardType";
import {v1} from "uuid"
import {ADD_NEW_BOARD} from "../const/const";

export type AddNewBoardAT = ReturnType<typeof addNewBoard>
type ActionsType = AddNewBoardAT
type InitialStateBoardsType = BoardType[]

let initialState: InitialStateBoardsType = [
    /*{
        title: "Board 1",
        id: "Board1"
    },
    {
        title: "Board 2",
        id: "Board2"
    },
    {
        title: "Board 3",
        id: "Board3"
    }*/
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