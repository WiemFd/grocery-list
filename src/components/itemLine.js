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
                <input
                id='Inputprice'
                type="text"
                value={`${Number(item.price).toFixed(3)} DTN`}
                readOnly
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
