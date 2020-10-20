import axios from 'axios'

export const baseURL = 'https://africanmp2020.herokuapp.com/'
export const axiosWithAuth = () => {
    const authToken = localStorage.getItem('user-token')

    return axios.create({
        headers: {
            Authorization: authToken
        }
    })
}