
import ItemsList from './itemsList';

const Content = ({items, handleCheck, handleDelete, setCount, totalPrice, setTotalPrice}) => {

    return (
        <main className="content">
            <ItemsList items={items} 
            handleCheck={handleCheck} 
            handleDelete={handleDelete} 
            setCount={setCount}
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
            ></ItemsList>
        </main>
        )
}

export default Content