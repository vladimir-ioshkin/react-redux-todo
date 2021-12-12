import {
    ADD_TODO_ITEM,
    DELETE_TODO_ITEM,
    EDIT_TODO_ITEM,
    ADD_TAG,
    DELETE_TAG,
    EDIT_TAG,
} from './consts';

export const addTodoItem = (payload) => {
    return {
        type: ADD_TODO_ITEM,
        payload,
    };
};

export const deleteTodoItem = (payload) => {
    return {
        type: DELETE_TODO_ITEM,
        payload,
    };
};

export const editTodoItem = (payload) => {
    return {
        type: EDIT_TODO_ITEM,
        payload,
    };
};

export const addTag = (payload) => {
    return {
        type: ADD_TAG,
        payload,
    };
};

export const deleteTag = (payload) => {
    return {
        type: DELETE_TAG,
        payload,
    };
};

export const editTag = (payload) => {
    return {
        type: EDIT_TAG,
        payload,
    };
};

