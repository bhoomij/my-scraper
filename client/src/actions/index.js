import axios from 'axios';

import { FETCH_IMAGES } from './types';

export const fetchImages = (url, callback) => async (dispatch) => {
    const res = await axios.post('/api/scrape', {
        url
    });
    callback();
    dispatch({ type: FETCH_IMAGES, payload: res.data });
}