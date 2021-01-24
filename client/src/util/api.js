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


export {
    registerUser,
    loginUser,
    getProfile
}