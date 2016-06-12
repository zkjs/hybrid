export function selectItem(item) {
    console.log(item);
    return {
        type: 'ITEM_SELECTED',
        payload: item
    };
}
