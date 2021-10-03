import {ActionTypes} from "../contants/action-types"

const initialState = {
    news: [],
    totalCount: null,
}
export const newsReduser = (state = initialState, { type, payload, payload2 }) => {
    switch (type) {
        case ActionTypes.SET_NEWS:
        return {
            ...state, 
            news: payload,
            totalCount: payload2
        } 
        default: return state
    }
}

export const selectedNewReduser = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_NEW:
        return {
            ...state, 
            ...payload
        }
        default: return state
    }
}

export const selectedNewComments = (state = {comments: []}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_COMMENTS:
        return {
            ...state, 
            comments: payload
        }
        default: return state
    }
}

