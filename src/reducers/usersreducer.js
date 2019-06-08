import React from 'react'

const usersReducer = (state, action) => {
    switch(action.type){
        case 'CREATE_USER':
            return {...state, users: [...state.users, action.payload]}
        break;
        default:
            return state
    }

}

export default usersReducer