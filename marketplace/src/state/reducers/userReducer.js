// import actions

import {} from '../actions'

const initialState = {
    name: '',
    email:'',
    profile_picture:'',
    owner: false
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}

export default userReducer