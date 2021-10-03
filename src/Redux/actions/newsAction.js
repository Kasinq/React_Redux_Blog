import { ActionTypes } from '../contants/action-types'

export const setNews = (news, totalCount) => {
    return {
        type: ActionTypes.SET_NEWS,
        payload: news,
        payload2: totalCount
    }
}

export const selectedNew = (news) => {
    return {
        type: ActionTypes.SELECTED_NEW,
        payload: news
    }
}

export const setComments = (news) => {
    return {
        type: ActionTypes.SET_COMMENTS,
        payload: news
    }
}

export const addComments = (newComment) => {
    return {
        type: ActionTypes.SET_COMMENTS,
        payload: newComment
    }
}
