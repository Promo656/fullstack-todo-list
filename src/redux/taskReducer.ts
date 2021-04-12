import {TaskType} from "../types/taskType";
import {ADD_NEW_TASK, ADD_NEW_TODOLIST, CHANGE_TASK_TITLE, SET_TASKS} from "../const/const";
import {AddNewTodoListAT} from "../types/todoListType";
import {Dispatch} from "redux";
import {todoListsAPI} from "../api/todoListApi";

export type TaskThunkDispatch = Dispatch<TaskReducerAT>

type InitialStateTaskType = {
    [key: string]: TaskType[]
}

type TaskReducerAT =
    AddNewTaskAT
    | AddNewTodoListAT
    | ChangeTaskTitleAT
    | SetTasksAT

let initialState: InitialStateTaskType = {
    /*  "TodoList1": [
          {
              _id: "eded",
              date: "12.12.12",
              title: "New Task",
              todoListId: "e3dee3d",
              __v: 0
          }
      ]*/
}


export const tasks = (state: InitialStateTaskType = initialState, action: TaskReducerAT) => {
    switch (action.type) {
        case ADD_NEW_TASK:
      debugger
            return {
                ...state,
                [action.payload.todoListId]: [
                    ...state[action.payload.todoListId],
                    action.payload
                ]
            }
        case CHANGE_TASK_TITLE:
            return {
                ...state,
                [action.payload.todoListId]: state[action.payload.todoListId]
                    .map(el =>
                        el._id === action.payload.taskId
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
                [action.payload._id]: []
            }
        case SET_TASKS:
            const result = {} as InitialStateTaskType
            action.payload.forEach(el => {
                if (!result[el.todoListId]) {
                    result[el.todoListId] = [el]
                } else {
                    result[el.todoListId].push(el)
                }
            })
            return {
                ...state,
                ...result
            }
        default :
            return state
    }
}

type AddNewTaskAT = {
    type: typeof ADD_NEW_TASK,
    payload: TaskType
}
export const addNewTask = (task: TaskType): AddNewTaskAT => ({
    type: ADD_NEW_TASK,
    payload: task
})

type ChangeTaskTitleAT = {
    type: typeof CHANGE_TASK_TITLE,
    payload: { todoListId: string, taskId: string, newTaskTitle: string }
}
export const changeTaskTitle = (todoListId: string, taskId: string, newTaskTitle: string): ChangeTaskTitleAT => ({
    type: CHANGE_TASK_TITLE,
    payload: {todoListId, taskId, newTaskTitle}
})

export type SetTasksAT = {
    type: typeof SET_TASKS,
    payload: TaskType[]
}

export const setTasks = (tasks: TaskType[]): SetTasksAT => ({
    type: SET_TASKS,
    payload: tasks
})

export const fetchTaskTC = () => async (dispatch: TaskThunkDispatch) => {
    const response = await todoListsAPI.getTasks()
    dispatch(setTasks(response.data))
}

export const addNewTaskTC = (boardId: string, todoListId: string, title: string) => async (dispatch: TaskThunkDispatch) => {
    const response = await todoListsAPI.addNewTask(boardId, todoListId, title)
    dispatch(addNewTask(response.data))
}