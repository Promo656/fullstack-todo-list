import axios from "axios";

const instance = axios.create({
    baseURL: 'https://localhost:5001/',
    headers: {"Access-Control-Allow-Origin": "*"}
})

export const todoListsAPI = {
    getBoards() {
        return axios.get('/board')
    }
}
