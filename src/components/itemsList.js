import ItemLine from "./itemLine";
import { useEffect } from "react";

const ItemsList = ({items, handleCheck, handleDelete, count, setCount}) => {

    useEffect(() => {
        setCount(items.length);
    }, [items, setCount]);

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
