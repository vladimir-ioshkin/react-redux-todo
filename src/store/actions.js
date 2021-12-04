import { ADD_TODO_ITEM, DELETE_TODO_ITEM } from './consts';

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
