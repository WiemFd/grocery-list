import Content from './components/content';
import Footer from './components/footer';
import Header from './components/header';
import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    {
        id: 1,
        checked: false,
        item: "Organic Whole Milk - 1 Gallon",
    },
    {
        id: 2,
        checked: true,
        item: "Free-Range Brown Eggs - 12 Pack",
    },
    {
        id: 3,
        checked: false,
        item: "Whole Wheat Multigrain Bread - 500g",
    }
  ]);

  const handleCheck = (id) => {
    const newList = items.map((item) =>
    id === item.id ? {...item, checked: !item.checked} : item
    );
    setItems(newList);
    localStorage.setItem('groceriesList', JSON.stringify(newList));
  }

  const handleDelete = (id) => {
      const newList = items.filter((item) =>
      id !== item.id
      );
      setItems(newList);
      localStorage.setItem('grocoriesList', JSON.stringify(newList));
  }

  return (
    <div className="App">
        <Header title="Grocery List"></Header>
        <Content items={items} handleCheck={handleCheck} handleDelete={handleDelete}></Content>
        <Footer length={items.length}></Footer>
    </div>
  );
}

export default App;
