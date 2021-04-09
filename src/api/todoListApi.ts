import axios from "axios";

const instance = axios.create({
    baseURL: 'https://localhost:5001/',
    headers: {"Access-Control-Allow-Origin": "*"}
})

export const todoListsAPI = {
    getBoards() {
        return axios.get('/board')
    },
    addNewBoard(title: string) {
        return axios.post('/board', {title})
    },
    deleteBoard(boardId: string) {
        return axios.delete(`/${boardId}`)
    },
    renameBoard(boardId: string, title: string) {
        return axios.patch(`/${boardId}`, {title})
    }
}
