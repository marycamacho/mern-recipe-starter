/**
 * Created by mary on 5/25/16.
 */

export const FETCH_MY_ITEMS = 'FETCH_MY_ITEMS';
export const FETCH_ALL_ITEMS = 'FETCH_ALL_ITEMS';
export const FETCH_ITEM = 'FETCH_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const FETCH_CURRENT_USER = 'FETCH_USER';
export const FETCH_PROFILE = 'FETCH_PROFILE';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';


export function fetchUser () {

    const request = $.getJSON('/fetch_current_user').then(function (user) {
        return {
            user
        };
    });

    return {
        type: FETCH_CURRENT_USER,
        payload: request
    };
}

export function fetchProfile () {

    const request = $.getJSON('/fetch-profile').then(function (result) {
        return {
            result
        };
    });

    return {
        type: FETCH_PROFILE,
        payload: request
    };
}

export function updateProfile () {

    const request = $.post('/update-profile').then(function (result) {
        return {
            result
        };
    });

    return {
        type: UPDATE_PROFILE,
        payload: request
    };
}

export function fetchMyItems() {

    const request = $.getJSON('/my_items').then(function (result) {
        return {
            list: result
        };
    });

    return {
        type: FETCH_MY_ITEMS,
        payload: request
    };
}

export function fetchAllItems() {

    const request = $.getJSON('/all_items').then(function (result) {
        return {
            list: result
        };
    });

    return {
        type: FETCH_ALL_ITEMS,
        payload: request
    };
}

export function fetchItem (id) {

    const request = $.getJSON(`/fetch_item/${id}` ).then(function (item) {
        return {
            item
        };
    });

    return {
        type: FETCH_ITEM,
        payload: request
    };
}

export function deleteItem (id) {
    const request = $.post(`/delete_item/${id}`).then(function (result) {
        return {}
    });

    return {
        type: DELETE_ITEM,
        payload: request
    };
}

