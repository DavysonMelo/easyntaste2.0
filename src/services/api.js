import axios from 'axios'

const api = axios.create({
    baseURL: 'https://easyntaste.herokuapp.com'
})
module.exports = api