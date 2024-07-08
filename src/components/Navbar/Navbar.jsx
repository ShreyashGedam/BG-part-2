import { useContext } from "react";
import "./Navbar.css";
import { CartContext } from "../../Context/CartContext/CartContextProvider";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const { count, login, setLogin } = useContext(CartContext);
  const navigate = useNavigate();

  // purpose of functuon is to navugate to products page
  function navigateProduct() {
    navigate("/product");
  }

  function handleLogout() {
    setLogin(false);
    navigate("/");
  }

  return (
    <div className="navbar-container">
      <Link to={"/"}>
        <p style={{ cursor: "pointer" }}>MY HOME</p>
      </Link>
      <p>Cart {count}</p>
      <p style={{ cursor: "pointer" }} onClick={navigateProduct}>
        Product
      </p>
      {login ? <button onClick={handleLogout}>Logout</button> : null}
    </div>
  );
}

export default Navbar;
