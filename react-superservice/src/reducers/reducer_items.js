import { FETCH_ITEMS } from '../actions/index';

export default function(state = [], action) {

    switch (action.type) {
    case FETCH_ITEMS:
        return action.payload.data || []
    }
    return state;
}
