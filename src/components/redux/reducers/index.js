import { actions } from "../actions";

const initialState = {
    blogs: [],
}

const blogReducer = (state = initialState, action ) => {
    switch (action.type) {
        case actions.LOAD_BLOGS:
            return {...state, blogs: action.payload}
    
        default:
            return state;
    }
}

export default blogReducer;