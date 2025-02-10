import React from "react";
import ItemLine from "./itemLine";

const ItemsList = ({items, handleCheck, handleDelete}) => (
    items.length ? (<ul>
        {items.map((item) => (
            <ItemLine item={item} handleCheck={handleCheck} handleDelete={handleDelete}></ItemLine>
            ))}
          </ul>) : <h3 className="noItem">Grocery list is empty!</h3>
        
);

export default ItemsList ;
