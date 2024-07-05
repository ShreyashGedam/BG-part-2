import { useContext } from "react";
import "./Navbar.css";
import { CartContext } from "../../Context/CartContext/CartContextProvider";

function Navbar() {
  const { count } = useContext(CartContext);

  return <div className="navbar-container">Cart {count}</div>;
}

export default Navbar;
