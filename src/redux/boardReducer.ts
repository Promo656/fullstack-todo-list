import {BoardType} from "../types/boardType";
import {v1} from "uuid"

type InitialStateType = BoardType[]

let initialState: InitialStateType = [
    {
        id: v1(),
        title: "First board"
    },
    {
        id: v1(),
        title: "Second board"
    },
    {
        id: v1(),
        title: "Third board"
    }
]

export const boards = (state: InitialStateType = initialState, action: any) => {
    switch (action.type) {
        default :
            return state
    }
}