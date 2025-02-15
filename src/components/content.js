
import ItemsList from './itemsList';

const Content = ({items, handleCheck, handleDelete, setCount, setTotalPrice}) => {

    return (
        <main className="content">
            <ItemsList items={items} 
            handleCheck={handleCheck} 
            handleDelete={handleDelete} 
            setCount={setCount}
            setTotalPrice={setTotalPrice}
            ></ItemsList>
        </main>
        )
}

export default Content