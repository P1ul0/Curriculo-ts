import axios from "axios";


const apiUrl = "https://api.github.com/users/P1ul0/repos"

export const api = axios.create({
    baseURL:apiUrl
})