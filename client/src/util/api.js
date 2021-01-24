import axios from "axios";


const registerUser = (userData) => {
    return axios.post(`http://localhost:5000/api/users/register`, userData)
}

const loginUser = (userData) => {
    return axios.post(`http://localhost:5000/api/users/login` , userData)
}

const getProfile = (id) => {
    return axios.get(`http://localhost:5000/api/profiles/get?id=${id}`)
}

const createEvent = (data) => {
    return axios.post(`http://localhost:5000/api/events/register` , data)
}

const getEventByLocation = (location) => {
    return axios.get(`http://localhost:5000/api/events/location?location=${location}`)
}

export {
    registerUser,
    loginUser,
    getProfile,
    createEvent,
    getEventByLocation
}