import axiosWithAuth from '../../api/axiosWithAuth'

export const GET_USER_PROFILE_START = 'GET_USER_PROFILE_START'
export const GET_USER_PROFILE_SUCCESS = 'GET_USER_PROFILE_SUCCESS'
export const GET_USER_PROFILE_FAIL = 'GET_USER_PROFILE_FAIL'
export const UPDATE_USER_EMAIL_START = 'UPDATE_USER_EMAIL_START'
export const UPDATE_USER_EMAIL_SUCCESS = 'UPDATE_USER_EMAIL_SUCCESS'
export const UPDATE_USER_EMAIL_FAIL = 'UPDATE_USER_EMAIL_FAIL'
export const DELETE_USER_START = 'DELETE_USER_START'
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS'
export const DELETE_USER_FAIL = 'DELETE_USER_FAIL'

export const getUserData = () => (dispatch) => {
    dispatch({ type: GET_USER_PROFILE_START })
    axiosWithAuth()
        .get(`api/users/${localStorage.getItem('id')}`)
        .then(res => {
            console.log(res.data)
            dispatch({ 
                type: GET_USER_PROFILE_SUCCESS, 
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err)
            dispatch({ 
                type: GET_USER_PROFILE_FAIL,
                payload: err.message
            })
        })
}
export const updateUserData = (newEmail) => (dispatch) => {
    dispatch({ type: UPDATE_USER_EMAIL_START })
    axiosWithAuth()
        .put(`api/users/${localStorage.getItem('id')}`, newEmail)
        .then(res => {
            console.log(res)
            axiosWithAuth()
                .get(`api/users/${localStorage.getItem('id')}`)
                .then(respose => {
                    console.log(respose)
                    dispatch({ 
                        type: UPDATE_USER_EMAIL_SUCCESS,
                        payload: respose.data
                    })
                })
                .catch(error => {
                    console.log(error)
                })
            
            
        })
        .catch(err => {
            console.log(err)
            dispatch({ 
                type: UPDATE_USER_EMAIL_FAIL,
                payload: err.message
            })
        })
}
export const deleteUser = () => (dispatch) => {
    dispatch({ type: DELETE_USER_START })
    axiosWithAuth()
        .delete(`api/users/${localStorage.getItem('id')}`)
        .then(res => {
            console.log(res)
            dispatch({
                type: DELETE_USER_SUCCESS
            })
        })
        .catch(err => {
            dispatch({
                type: DELETE_USER_FAIL,
                payload: err.message
            })
        })
}
