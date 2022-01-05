export function addToProductList(payload) {
    return {
        type: 'ADD_TO_PRODUCT_LIST',
        payload
    }
}

export function removeFromProductList(payload) {
    return {
        type: 'REMOVE_FROM_PRODUCT_LIST',
        payload
    }
}
export function updateProductList(payload) {
    return {
        type: 'UPDATE_PRODUCT_LIST',
        payload
    }
}