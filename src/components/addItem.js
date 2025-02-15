import { useRef } from 'react';
import { FaPlus } from 'react-icons/fa';

const AddItem = ({newItem, setNewItem, price, setPrice, handleSubmit}) => {
    const inputRef=useRef();
    return(
        <form className="addForm" onSubmit={handleSubmit}>
            <label htmlFor="addItem">
                Add Item
            </label>
            <input
                autoFocus
                ref={inputRef}
                id='addItem'
                type='text'
                required
                value={newItem}
                placeholder='Add Item'
                onChange={(e) => setNewItem(e.target.value)}
            />
            <label htmlFor="priceItem">
                Add price
            </label>
            <input
                type="text"
                id='priceItem'
                required
                placeholder='Add price (DTN)'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <button
                type="submit"
                aria-label="Add Item"
                onClick={() => inputRef.current.focus()}
            >
                <FaPlus></FaPlus>   
            </button>
        </form>
    )
}

export default AddItem