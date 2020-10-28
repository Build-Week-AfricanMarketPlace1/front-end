// import actions

import {
    GET_USER_PROFILE_START,
    GET_USER_PROFILE_SUCCESS,
    GET_USER_PROFILE_FAIL,
    UPDATE_USER_EMAIL_START,
    UPDATE_USER_EMAIL_SUCCESS,
    UPDATE_USER_EMAIL_FAIL,
    DELETE_USER_START,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL
} from '../actions/userActions'

const initialState = {
    user: {},
    promise_waiting: false,
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
                promise_waiting: true
            }
        case GET_USER_PROFILE_SUCCESS:
            console.log('GET_USER_PROFILE_SUCCESS')
            return{
                ...state,
                promise_waiting: false,
                user: action.payload    
            }
        case GET_USER_PROFILE_FAIL:
            console.log('GET_USER_PROFILE_FAIL')
            return {
                ...state,
                promise_waiting: false,
                user: testUser,
                error: action.payload
            }
        case UPDATE_USER_EMAIL_START:
            console.log('UPDATE_USER_EMAIL_START')
            return {
                ...state,
                promise_waiting: true                
            }
        case UPDATE_USER_EMAIL_SUCCESS:
            console.log('UPDATE_USER_EMAIL_SUCCESS')
            return {
                ...state,
                promise_waiting: false,
                user: action.payload
            }            
        case UPDATE_USER_EMAIL_FAIL:
            console.log('UPDATE_USER_EMAIL_FAIL')
            return {
                ...state,
                promise_waiting: false,
                ...state.user,
                email: action.payload
            }
        case DELETE_USER_START:
            console.log('DELETE_USER_START')
            return {
                ...state,
                promise_waiting: true,
            }
        case DELETE_USER_SUCCESS:
            console.log('DELETE_USER_SUCCESS')
            return {
                ...state,
                promise_waiting: false
            }
        case DELETE_USER_FAIL:
            console.log('DELETE_USER_FAIL')
            return {
                ...state,
                promise_waiting: true,
                error: action.payload
            }
        default:
            return state
    }
}

export default userReducer