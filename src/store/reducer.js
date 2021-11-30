import { ADD_TODO_ITEM } from './consts';
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

        default:
            return state;
    }
};
