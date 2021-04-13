import axios from "axios";

const api = '/api/v1'

export const todoListsAPI = {
    getBoards() {
        return axios.get(`${api}/getBoards`)
    },
    addNewBoard(title: string) {
        return axios.post(`${api}/addNewBoard`, {title})
    },
    deleteBoard(boardId: string) {
        return axios.delete(`${api}/deleteBoard/${boardId}`)
    },
    renameBoard(boardId: string, title: string) {
        return axios.patch(`${api}/renameBoard/${boardId}`, {title})
    },

    getTodoLists() {
        return axios.get(`${api}/getTodolist`)
    },
    addNewTodoList(boardId: string, title: string) {
        return axios.post(`${api}/addNewTodolist`, {title, boardId})
    },
    deleteAllTodoListFromBoard(boardId: string) {
        return axios.delete(`${api}/deleteAllTodoListFromBoard/${boardId}`)
    },
    deleteOneTodoList(todoListId: string) {
        return axios.delete(`${api}/deleteOneTodoList/${todoListId}`)
    },
    renameTodoList(todoListId: string, title: string) {
        return axios.patch(`${api}/renameTodoList/${todoListId}`, {title})
    },

    getTasks() {
        return axios.get(`${api}/getTasks`)
    },
    addNewTask(boardId: string, todoListId: string, title: string) {
        return axios.post(`${api}/addNewTask`, {boardId, todoListId, title})
    },
    deleteAllTaskFromBoard(boardId: string) {
        return axios.delete(`${api}/deleteAllTaskFromBoard/${boardId}`)
    },
    deleteAllTaskFromTodoList(todoListId: string) {
        return axios.delete(`${api}/deleteAllTaskFromTodoList/${todoListId}`)
    },
    renameTask(taskId: string, title: string) {
        return axios.patch(`${api}/renameTask/${taskId}`, {title})
    }
}
