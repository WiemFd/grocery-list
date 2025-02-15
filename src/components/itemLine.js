import { FaTrashAlt } from 'react-icons/fa';
import { useEffect } from "react";

const ItemLine = ({item, handleCheck, handleDelete, totalPrice, setTotalPrice}) => {

    useEffect(() => {
        setTotalPrice(totalPrice + Number(item.price));
    }, [item, totalPrice, setTotalPrice]);

    return(
        <li className="item">
                <input
                type="checkbox"
                checked={item.checked} 
                onChange={() => handleCheck(item.id)}
                />
                <label onDoubleClick={() => {handleCheck(item.id)} }>{item.item}</label>
                <input
                type="text"
                value={item.price}
                />
                <FaTrashAlt
                    onClick={() => handleDelete(item.id)}
                    role="button"
                    tabIndex="0"
                />
        </li> 
    )
}
            
export default ItemLine
