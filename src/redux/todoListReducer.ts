import {TodoListType} from "../types/todoListType";
import {ADD_NEW_TODOLIST} from "../const/const";

type ActionsType = ReturnType<typeof addNewTodoList>

type InitialStateTodoListType = {
    [key: string]: TodoListType[]
}

let initialState: InitialStateTodoListType = {
    /*   "Board1": [
           {
               id: "todoList1",
               title: "TodoList 1",
               boardId: "Board1"
           },
           {
               id: "todoList2",
               title: "TodoList 2",
               boardId: "Board1"
           }
       ],*/
}

export const todoLists = (state: InitialStateTodoListType = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_NEW_TODOLIST:
            debugger
            return {
                ...state,
                [action.payload.todoList.boardId]: [
                    action.payload.todoList,
                    ...state[action.payload.todoList.boardId]
                ]
            }
        default :
            return state
    }
}

export const addNewTodoList = (todoList: TodoListType) => ({
    type: ADD_NEW_TODOLIST,
    payload: {todoList}
})