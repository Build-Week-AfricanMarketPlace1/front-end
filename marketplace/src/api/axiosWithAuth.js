import axios from 'axios'

export const baseURL = 'https://africanmp2020.herokuapp.com/api/'
export const axiosWithAuth = () => {
    const authToken = localStorage.getItem('user-token')

    return axios.create({
        headers: {
            Authorization: authToken
        }
    })
}