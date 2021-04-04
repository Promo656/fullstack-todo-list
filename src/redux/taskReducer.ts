import {v1} from "uuid"
import {TaskType} from "../types/taskType";
import {ADD_NEW_TASK, ADD_NEW_TODOLIST} from "../const/const";
import {addNewTodoList, AddNewTodoListAT} from "./todoListReducer";

type InitialStateTaskType = {
    [key: string]: TaskType[]
}

type AddNewTaskAT = ReturnType<typeof addNewTask>
type TaskReducerAT =
    AddNewTaskAT & AddNewTodoListAT

let initialState: InitialStateTaskType = {
    /*    "todoList1": [
            {
                text: "Task 1",
                id: "task1",
                todoListId: "todoList1"
            },
            {
                text: "Task 2",
                id: "task2",
                todoListId: "todoList1"
            },
            {
                text: "Task 3",
                id: "task3",
                todoListId: "todoList1"
            }
        ],
        "todoList2": [
            {
                text: "Task 1",
                id: "task1",
                todoListId: "todoList2"
            },
            {
                text: "Task 2",
                id: "task2",
                todoListId: "todoList2"
            }
        ]*/
}


export const tasks = (state: InitialStateTaskType = initialState, action: TaskReducerAT) => {
    switch (action.type) {
        case ADD_NEW_TASK:
            return {
                ...state,
                [action.payload.task.todoListId]: [
                    ...state[action.payload.task.todoListId],
                    action.payload.task
                ]
            }
        case ADD_NEW_TODOLIST:
            return {
                ...state,
                [action.payload.todoList.id]: []
            }
        default :
            return state
    }
}

export const addNewTask = (task: TaskType) => ({
    type: ADD_NEW_TASK,
    payload: {task}
})
