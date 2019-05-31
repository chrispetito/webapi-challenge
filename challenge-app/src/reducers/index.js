import { GET_PROJECTS_START,GET_PROJECTS_SUCCESS, GET_PROJECTS_FAIL} from '../actions'

const initialState = {
    projects: [],
    gettingProjects: false,
    error: ''
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_PROJECTS_START:
        return {
            ...state,
            gettingProjects: true,
            error: ''
        }
        case GET_PROJECTS_SUCCESS:
        return {
            ...state,
            gettingProjects: false,
            projects: action.payload,
            error: ''
        }
        case GET_PROJECTS_FAIL:
        return {
            gettingProjects: false,
            error: action.payload
        }
        default:
        return state;
    }

}