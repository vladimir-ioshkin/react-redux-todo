import { ADD_TODO_ITEM, DELETE_TODO_ITEM, EDIT_TODO_ITEM } from './consts';
const defaultState = {
    items: [],
};

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TODO_ITEM:
            const item = {
                ...action.payload,
                id: Date.now(),
            };
            return {
                ...state,
                items: [...state.items, item],
            };
        case DELETE_TODO_ITEM:
            const filteredItems = state.items.filter(
                (item) => item.id !== action.payload.id
            );
            return {
                ...state,
                items: filteredItems,
            };
        case EDIT_TODO_ITEM:
            const mappedItems = state.items.map((item) => {
                if (item.id !== action.payload.id) {
                    return item;
                }
                return {
                    ...item,
                    ...action.payload
                };
            });
            return {
                ...state,
                items: mappedItems,
            };
        default:
            return state;
    }
};
