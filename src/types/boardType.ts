import {TodoListType} from "./todoListType";

export type BoardType = {
    [key: string]: {
        title:string
        todoLists:TodoListType[]
    }
}