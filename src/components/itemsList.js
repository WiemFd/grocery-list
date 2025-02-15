import ItemLine from "./itemLine";
import { useEffect } from "react";

const ItemsList = ({items, handleCheck, handleDelete, setCount, setTotalPrice}) => {

    useEffect(() => {
        setCount(items.length);
    }, [items, setCount]);

    useEffect(() => {
        const newTotal = items.reduce((sum, item) => sum + Number(item.price), 0);
        setTotalPrice(newTotal);
    }, [items, setTotalPrice]);

    return(
        items.length ? (<ul>
            {items.map((item) => (
                <ItemLine 
                    key={item.id}
                    item={item}
                    handleCheck={handleCheck} 
                    handleDelete={handleDelete}
                    >   
                </ItemLine>
                ))}
              </ul>) : <h3 className="noItem">No Items!</h3>
    )
}

export default ItemsList
