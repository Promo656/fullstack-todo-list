import {TaskType} from "../types/taskType";
import {ADD_NEW_TASK, ADD_NEW_TODOLIST, CHANGE_TASK_TITLE} from "../const/const";
import {AddNewTodoListAT} from "./todoListReducer";

type InitialStateTaskType = {
    [key: string]: TaskType[]
}

type AddNewTaskAT = ReturnType<typeof addNewTask>
type ChangeTaskTitleAT = ReturnType<typeof changeTaskTitle>
type TaskReducerAT =
    AddNewTaskAT
    & AddNewTodoListAT
    & ChangeTaskTitleAT

let initialState: InitialStateTaskType = {
    /* "TodoList1": [
         {
             id: "Task1",
             todoListId: "TodoList1",
             text: "Task 1"
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
        case CHANGE_TASK_TITLE:
            return {
                ...state,
                [action.payload.todoListId]: state[action.payload.todoListId]
                    .map(el =>
                        el.id === action.payload.taskId
                            ? {
                                ...el,
                                text: action.payload.newTaskTitle
                            }
                            : el
                    )
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

export const changeTaskTitle = (todoListId: string, taskId: string, newTaskTitle: string) => ({
    type: CHANGE_TASK_TITLE,
    payload: {todoListId, taskId, newTaskTitle}
})
