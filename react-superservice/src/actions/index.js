import axios from 'axios';

const ROOT_URL = 'https://api.github.com';

export const ITEM_SELECTED = 'ITEM_SELECTED';
export const FETCH_ITEMS = 'FETCH_ITEMS';

export function selectItem(item) {
    console.log('select item:'); console.log(item);
    return {
        type: ITEM_SELECTED,
        payload: item
    };
}

export function fetchItems() {
    const url =  `${ROOT_URL}/users`;
    const request = axios.get(url);

    console.log('fetch data'); console.log(url);

    return {
        type: FETCH_ITEMS,
        payload: request
    }
}
