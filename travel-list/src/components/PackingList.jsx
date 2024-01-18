import { useState } from 'react';
import Item from './Item';

const PackingList = ({ items, onDeleteItem, onToggleItem, onClearList }) => {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems;

  if (sortBy === 'input') sortedItems = items;
  else if (sortBy === 'description') {
    sortedItems = [...items].sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  } else if (sortBy === 'packed') {
    sortedItems = [...items].sort(
      (a, b) => Number(a.packed) - Number(b.packed)
    );
  } else if (sortBy === 'quantity') {
    sortedItems = [...items].sort((a, b) => a.quantity - b.quantity);
  }

  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className='list'>
      <ul>
        {sortedItems.map((item) => (
          <Item
            {...item}
            key={item.id}
            onDeleteItem={onDeleteItem(item.id)}
            onToggleItem={onToggleItem(item.id)}
          />
        ))}
      </ul>

      <div className='actions'>
        <select value={sortBy} onChange={handleSortBy}>
          <option value='input'>Sort By input order</option>
          <option value='description'>Sort by description</option>
          <option value='packed'>Sort by packed status</option>
          <option value='quantity'>Sort by quantity</option>
        </select>

        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
};

export default PackingList;
