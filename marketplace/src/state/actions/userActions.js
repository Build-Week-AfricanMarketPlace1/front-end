import { axiosWithAuth, baseURL } from '../../api/axiosWithAuth'

export const GET_USER_PROFILE_START = 'GET_USER_PROFILE_START'
export const GET_USER_PROFILE_SUCCESS = 'GET_USER_PROFILE_SUCCESS'
export const GET_USER_PROFILE_FAIL = 'GET_USER_PROFILE_FAIL'

export const getUserData = (id) => (dispatch) => {
    dispatch({ type: GET_USER_PROFILE_START })
    axiosWithAuth()
        .get(`users/${id}`)
        .then(res => {
            console.log(res)
            dispatch({ 
                type: GET_USER_PROFILE_SUCCESS, 
                payload: res
            })
        })
        .catch(err => {
            dispatch({ 
                type: GET_USER_PROFILE_FAIL,
                payload: err.message
            })
        })
}
