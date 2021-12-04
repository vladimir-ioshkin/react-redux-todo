import { ADD_TODO_ITEM, DELETE_TODO_ITEM } from './consts';
const defaultState = {
    items: [],
};

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TODO_ITEM:
            const item = {
                title: action.payload.title,
                description: action.payload.description,
                id: Date.now(),
            };
            return {
                ...state,
                items: [...state.items, item],
            };
        case DELETE_TODO_ITEM:
            const items = state.items.filter(
                (item) => item.id !== action.payload.id
            );
            return {
                ...state,
                items,
            };

        default:
            return state;
    }
};
