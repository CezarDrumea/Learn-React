import { useState } from 'react';
import Form from './components/Form';
import Logo from './components/Logo';
import PackingList from './components/PackingList';
import Stats from './components/Stats';

const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((curState) => [...curState, item]);
  };

  const handleDeleteItem = (id) => () => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => () => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
