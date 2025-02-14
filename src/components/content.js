
import ItemsList from './itemsList';

const Content = ({items, handleCheck, handleDelete}) => {

    return (
        <main className="content">
            <ItemsList items={items} handleCheck={handleCheck} handleDelete={handleDelete}></ItemsList>
        </main>
        )
}

export default Content