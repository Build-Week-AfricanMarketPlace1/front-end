import axios from 'axios'

export const baseURL = 'https://africanmp2020.herokuapp.com/api/'
export const axiosWithAuth = () => {
    const authToken = window.localStorage.getItem('login-token')

    return axios.create({
        baseURL: baseURL,
        headers: {
            Authorization: authToken
        }
    })
}