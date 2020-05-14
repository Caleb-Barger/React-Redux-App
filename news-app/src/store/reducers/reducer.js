import {
    GET_NEWS_START,
    GET_NEWS_SUCCESS,
    GET_NEWS_FAIL,
} from '../actions/'

const initalState = {
    isFetching: false,
    articles: [],
    error: ""
}

export const newsReducer = (state = initalState, action) => {
    switch (action.type) {
        case GET_NEWS_START:
            return {
                ...state,
                isFetching: action.payload.isFetching,
                error: action.payload.error
            }
        case GET_NEWS_SUCCESS:
            return {
                ...state,
                articles: action.payload.articles,
                isFetching: action.payload.isFetching,
                error: action.payload.error
            }
        case GET_NEWS_FAIL:
            return {
                ...state,
                error: action.payload.error,
                isFetching: action.payload.isFetching
            }
        default:
            return state
    }
}
