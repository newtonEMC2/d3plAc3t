import fetch from 'isomorphic-unfetch'
import { FETCH_PERFORMERS } from './types'

export const fetchPerformers = (page, status, name) => {
    return (dispatch) => {
        let url = 'https://rickandmortyapi.com/api/character/'
        if (page) url = `${url}?page=${page}`
        if (status) url = url.includes('?') ? `${url}&status=${status}` : `${url}?status=${status}`
        if (name) url = url.includes('?') ? `${url}&name=${name}` : `${url}?name=${name}`
        fetch(url)
            .then((res) => res.json())
            .then((json) => {
                dispatch({
                    type: FETCH_PERFORMERS,
                    payload: { info: json.info, performers: json.results || [] }
                })
            })
            .catch(() => console.log('no performers found'))
    }
}
