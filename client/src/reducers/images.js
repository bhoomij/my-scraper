import { FETCH_IMAGES } from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_IMAGES:
            return action.payload.images;
        default:
            return state;
    }
}