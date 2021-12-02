import { useSelector } from "react-redux";


export const ItemList = () => {
    const items = useSelector((state) => {
        return state.items;
    });

    return (
        <ul>
           {items.map(({ title, id }) => {
               return (
                   <li key={id}>{title}</li>
               );
           })}
        </ul>
    )
};
