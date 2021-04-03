import {BoardType} from "../types/boardType";
import {v1} from "uuid"

type InitialStateBoardsType = BoardType[]

let initialState: InitialStateBoardsType = [
    {
        title: "Board 1",
        id: "Board1"
    }
]

export const boards = (state: InitialStateBoardsType = initialState, action: any) => {
    switch (action.type) {
        default :
            return state
    }
}