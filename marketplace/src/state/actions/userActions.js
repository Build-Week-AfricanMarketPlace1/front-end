import { axiosWithAuth, baseURL } from '../../api/axiosWithAuth'

export const GET_USER_PROFILE_START = 'GET_USER_DATA_START'

export const getUserData = () => (dispatch) => {
    dispatch({ type: GET_USER_PROFILE_START })
    axiosWithAuth()
        .get(`${baseURL}/users/:id`)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.error(err)
        })
}
