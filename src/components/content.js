
import ItemsList from './itemsList';

const Content = ({items, handleCheck, handleDelete, count, setCount}) => {

    return (
        <main className="content">
            <ItemsList items={items} handleCheck={handleCheck} handleDelete={handleDelete} count={count} setCount={setCount}></ItemsList>
        </main>
        )
}

export default Content