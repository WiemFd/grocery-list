import AddItem from './components/addItem';
import Content from './components/content';
import Footer from './components/footer';
import Header from './components/header';
import { useState } from "react";
import Search from './components/search';

function App() {
   const [items, setItems] = useState(JSON.parse(localStorage.getItem('groceriesList')));
  // [
  //   {
  //       id: 1,
  //       checked: false,
  //       item: "Organic Whole Milk - 1 Gallon",
  //   },
  //   {
  //       id: 2,
  //       checked: true,
  //       item: "Free-Range Brown Eggs - 12 Pack",
  //   },
  //   {
  //       id: 3,
  //       checked: false,
  //       item: "Whole Wheat Multigrain Bread - 500g",
  //   }
  // ]);

  const [newItem, setNewItem] = useState('');
  const [price, setPrice] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [searchItem, setSearchItem] = useState('');
  const [count, setCount] = useState(0);

  const setAndStorage = (newList) => {
    setItems(newList);
    localStorage.setItem('groceriesList', JSON.stringify(newList));
  }

  const addItem = (item, price) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const newItem = {id, checked: false, item, price};
    const newList = [...items, newItem];
    setAndStorage(newList);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem) return;
    addItem(newItem,price);
    setNewItem('');
    setPrice('');
  }

  const handleCheck = (id) => {
    const newList = items.map((item) =>
    id === item.id ? {...item, checked: !item.checked} : item);
    setAndStorage(newList);
  }

  const handleDelete = (id) => {
    const newList = items.filter((item) =>
    id !== item.id
    );
    setAndStorage(newList);
  }

  return (
    <div className="App">
        <Header title="Grocery List"></Header>
        <AddItem 
          newItem={newItem} 
          setNewItem={setNewItem} 
          handleSubmit={handleSubmit}
          price={price}
          setPrice={setPrice}
        >

        </AddItem>
        <Search searchItem={searchItem} setSearchItem={setSearchItem}></Search>
        <Content 
          items={items.filter(item => ((item.item).toLowerCase()).includes(searchItem.toLowerCase()))}
          setCount={setCount}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
          handleCheck={handleCheck} 
          handleDelete={handleDelete}
        >
        </Content>
        <Footer length={items.length} searchItem={searchItem} count={count} totalPrice={totalPrice}></Footer>
    </div>
  )
}

export default App
