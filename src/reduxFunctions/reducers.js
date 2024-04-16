import { SET_TEXT } from './actions';

const initialState = {
    text: ''
};

function editorReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TEXT:
            return {
                ...state,
                text: action.payload
            };
        default:
            return state;
    }
}

export default editorReducer;