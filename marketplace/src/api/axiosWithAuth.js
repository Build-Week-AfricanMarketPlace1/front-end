import axios from 'axios'

export const baseURL = 'https://africanmp2020.herokuapp.com/api/'
export const axiosWithAuth = () => {
    const token = localStorage.getItem('token')

    return axios.create({
        baseURL: baseURL,
        headers: {
            authorization: token
        }
    })
}