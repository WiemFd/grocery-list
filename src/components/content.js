import { useState } from "react";
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {

    const [items, setItems] = useState([
        {
            id: 1,
            checked: false,
            item: "pizza",
        },
        {
            id: 2,
            checked: true,
            item: "pasta khjk hghjk ghjkl vghjki fghj dtfgyhjk fghujik",
        },
        {
            id: 3,
            checked: false,
            item: "hrissa",
        }
    ]);

    const handleCheck = (id) => {
        const newList = items.map((item) =>
        id === item.id ? {...item, checked: !item.checked} : item
        );
        setItems(newList);
    }

    const handleDelete = (id) => {
        const newList = items.filter((item) =>
        id !== item.id
        );
        setItems(newList);
    }

    return (
        <main className="content">
          
           {items.length ? (<ul>
            {items.map((item) => (
                <li key={item.id} className="item">
                    <input
                    type="checkbox"
                    checked={item.checked} 
                    onChange={() => handleCheck(item.id)}
                     />
                    <label>{item.item}</label>
                    <FaTrashAlt
                        onClick={() => handleDelete(item.id)}
                        role="button"
                        tabIndex="0"
                    />
                </li>
                ))}
              </ul>) : <h3 className="noItem"> No items in groceries list! </h3>
            }
            
        </main>
        )
};

export default Content;