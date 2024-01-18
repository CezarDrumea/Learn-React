import Item from './Item';

const PackingList = ({ items, onDeleteItem, onToggleItem }) => {
  return (
    <div className='list'>
      <ul>
        {items.map((item) => (
          <Item
            {...item}
            key={item.id}
            onDeleteItem={onDeleteItem(item.id)}
            onToggleItem={onToggleItem(item.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
