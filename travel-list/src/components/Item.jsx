const Item = ({
  description,
  quantity,
  packed,
  onDeleteItem,
  onToggleItem,
}) => {
  return (
    <li>
      <input type='checkbox' checked={packed} onChange={onToggleItem} />
      <span style={packed ? { textDecoration: 'line-through' } : null}>
        {quantity} {description}
      </span>
      <button onClick={onDeleteItem}>❌</button>
    </li>
  );
};
export default Item;
