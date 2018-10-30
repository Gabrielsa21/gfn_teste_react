import { MAP } from '../actions/MapAction';

const initialState = {
    map: null
}
export default function (state = initialState, action) {
    switch (action.type) {
        case MAP: {
            return {...state, bnt: action.map }
        }
        default: return state;
    }
}
