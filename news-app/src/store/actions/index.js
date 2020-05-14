import axios from "axios"

export const GET_NEWS_START = "GET_NEWS_START"
export const GET_NEWS_SUCCESS = "GET_NEWS_SUCCESS"
export const GET_NEWS_FAIL = "GET_NEWS_FAIL"

const apiKey = "9bebc910bf6d4ff08796064f0a13cc38"
const url = "https://newsapi.org/v2/top-headlines?country=us"

export const getNews = () => dispatch => {
    dispatch({ type: GET_NEWS_START, payload: { isFetching: true, error: "" } })
    axios
        .get(`${url}&apiKey=${apiKey}`)
        .then(res => {
            dispatch({ type: GET_NEWS_SUCCESS, payload: { articles: res.data.articles, isFetching: false, error: "" } })
        })
        .catch(err => {
            dispatch({ type: GET_NEWS_FAIL, payload: { error: err, isFetching: false } })
        })
}