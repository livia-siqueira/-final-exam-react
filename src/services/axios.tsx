import axios from 'axios'

const games = axios.create({
    baseURL: "http://localhost:3000/"
})

export default games;