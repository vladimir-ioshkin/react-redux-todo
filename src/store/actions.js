import { ADD_TODO_ITEM } from "./consts";

export const addTodoItem = (payload) => {
    return {
        type: ADD_TODO_ITEM,
        payload,
    }
};
