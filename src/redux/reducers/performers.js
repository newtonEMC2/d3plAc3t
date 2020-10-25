import { FETCH_PERFORMERS } from '../actions/types'

const Performers = (state = {}, action) => {
    switch (action.type) {
        case FETCH_PERFORMERS:
            return action.payload
        default:
            return state
    }
}

export default Performers
