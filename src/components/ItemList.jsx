import { useSelector } from 'react-redux';
import { Item } from './Item';

export const ItemList = () => {
    const items = useSelector((state) => {
        return state.items;
    });

    return (
        <ul>
            {items.map(({ id, title, description }) => {
                return (
                    <Item key={id} id={id} title={title} description={description} />
                );
            })}
        </ul>
    );
};
