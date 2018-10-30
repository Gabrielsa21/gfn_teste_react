import { TABLE } from '../actions/TableAction';

const initialState = {
    name: null,
    revenue: null
}
export default function (state = initialState, action) {
    switch (action.type) {
        case TABLE: {
            return {...state, name: action.name, revenue: action.revenue }
        }
        default: return state;
    }
}
