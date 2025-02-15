import ItemLine from "./itemLine";
import { useEffect } from "react";

const ItemsList = ({items, handleCheck, handleDelete, setCount, totalPrice, setTotalPrice}) => {

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
                    totalPrice={totalPrice}
                    setTotalPrice={setTotalPrice}
                    >   
                </ItemLine>
                ))}
              </ul>) : <h3 className="noItem">No Items!</h3>
    )
}

export default ItemsList
