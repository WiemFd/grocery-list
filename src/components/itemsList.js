import React from "react";
import ItemLine from "./itemLine";

const ItemsList = ({items, handleCheck, handleDelete}) => {
    return(
        items.length ? (<ul>
            {items.map((item) => (
                <ItemLine 
                    key={item.id}
                    item={item}
                    handleCheck={handleCheck} 
                    handleDelete={handleDelete}>   
                </ItemLine>
                ))}
              </ul>) : <h3 className="noItem">No Items!</h3>
    )
}

export default ItemsList
