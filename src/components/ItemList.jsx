import { useSelector } from 'react-redux';
import { Item } from './Item';

export const ItemList = () => {
    const items = useSelector((state) => {
        return state.items;
    });

    return (
        <ul>
            {items.map((item) => {
                return (
                    <Item key={item.id} item={item} />
                );
            })}
        </ul>
    );
};
