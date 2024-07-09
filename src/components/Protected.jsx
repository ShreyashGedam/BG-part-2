import { useContext } from "react";
import { CartContext } from "../Context/CartContext/CartContextProvider";
import { Navigate } from "react-router-dom";

function Protected({ children }) {
  const { login } = useContext(CartContext);

  if (login === false) {
    return <Navigate to={"/login"}></Navigate>;
  }

  return children;
}

export default Protected;
