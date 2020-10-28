import axios from 'axios'
export const baseURL = 'https://africanmp2020.herokuapp.com/'
const axiosWithAuth = () => {
    const token = localStorage.getItem('token')
    return axios.create({
        baseURL: baseURL,
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}
export default axiosWithAuth