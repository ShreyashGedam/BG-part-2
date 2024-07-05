import { useContext } from "react";
import "./Card.css";
import { CartContext } from "../../Context/CartContext/CartContextProvider";

function Card() {
  const { count, setCount, funcDecrement } = useContext(CartContext);

  function add() {
    setCount(count + 1);
  }

  return (
    <div className="card-container">
      <button onClick={add}>ADD</button>
      <button onClick={funcDecrement}>DEC</button>
    </div>
  );
}

export default Card;
