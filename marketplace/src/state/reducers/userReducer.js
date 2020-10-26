// import actions

import {
    GET_USER_PROFILE_START,
    GET_USER_PROFILE_SUCCESS,
    GET_USER_PROFILE_FAIL
} from '../actions/userActions'

const initialState = {
    user: {},
    is_fetching: false,
    error: ''
}

const testUser = {
    username: 'Testerton III',
    email:'test@test.com',
    profile_image:'https://avatars0.githubusercontent.com/u/62022413?s=400&u=532b55c68e52bfbeb649c4fca1f3c436843497ef&v=4',
    items:''
  }

function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_PROFILE_START:
            console.log('GET_USER_PROFILE_START')
            return {
                ...state,
                is_fetching: true
            }
        case GET_USER_PROFILE_SUCCESS:
            console.log('GET_USER_PROFILE_SUCCESS')
            return{
                ...state,
                is_fetching: false,
                user: action.payload    
            }
        case GET_USER_PROFILE_FAIL:
            console.log('GET_USER_PROFILE_FAIL')
            return {
                ...state,
                user: testUser,
                error: action.payload
            }
        default:
            return state
    }
}

export default userReducer