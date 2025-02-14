import React from "react";
import { FaTrashAlt } from 'react-icons/fa';

const ItemLine = ({item, handleCheck, handleDelete}) => {
    return(
        <li className="item">
                <input
                type="checkbox"
                checked={item.checked} 
                onChange={() => handleCheck(item.id)}
                 />
                <label onDoubleClick={() => {handleCheck(item.id)} }>{item.item}</label>
                <FaTrashAlt
                    onClick={() => handleDelete(item.id)}
                    role="button"
                    tabIndex="0"
            />
        </li> 
    )
}
            
export default ItemLine
