export function addToOrderList(payload) {
    return {
        type: 'ADD_TO_ORDER_LIST',
        payload
    }
}

export function removeFromOrderList(payload) {
    return {
        type: 'REMOVE_FROM_ORDER_LIST',
        payload
    }
}
export function updateOrderList(payload) {
    return {
        type: 'UPDATE_ORDER_LIST',
        payload
    }
}