import { useContext } from "react";
import { CartContext } from "../../Context/CartContext/CartContextProvider";
import { Navigate } from "react-router-dom";

// This is my private route. only logged in user can access this page.
function ProductPage() {
  const { login } = useContext(CartContext);

  if (login === false) {
    return <Navigate to={"/login"}></Navigate>;
  }

  return (
    <div>
      <h1>Product Page</h1>
    </div>
  );
}

export default ProductPage;
