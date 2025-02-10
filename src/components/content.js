
import { FaTrashAlt } from 'react-icons/fa';

const Content = ({items, handleCheck, handleDelete}) => {

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
                    <label onDoubleClick={() => {handleCheck(item.id)} }>{item.item}</label>
                    <FaTrashAlt
                        onClick={() => handleDelete(item.id)}
                        role="button"
                        tabIndex="0"
                    />
                </li>
                ))}
              </ul>) : <h3 className="noItem">Grocery list is empty!</h3>
            }
            
        </main>
        )
};

export default Content;