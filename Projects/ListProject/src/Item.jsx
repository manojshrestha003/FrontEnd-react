import style from './items.module.css';

const Item = ({ food, bought, onBuy }) => {
  // Event handler to trigger the onBuy function
  const handleEvent = () => {
    onBuy(food);  // Call onBuy with the food item
  }

  return (
    <li className={`${style.item} list-group-item ${bought ? 'active' : ''}`}>
      <span className={style['kg-span']}>{food}</span>
      <button
        className={`${style.button} btn btn-info`}
        onClick={handleEvent}  // Call handleEvent on button click
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
