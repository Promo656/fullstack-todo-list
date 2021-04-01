import {BoardType} from "../types/boardType";
import {v1} from "uuid"

type InitialStateBoardsType = BoardType

let initialState:InitialStateBoardsType = {
    [v1()]: {
        title:"Board 1",
        todoLists:[]
    }



    /* {
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
     }*/
}

export const boards = (state: InitialStateBoardsType = initialState, action: any) => {
    switch (action.type) {
        default :
            return state
    }
}