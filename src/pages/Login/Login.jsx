import { useContext } from "react";
import { CartContext } from "../../Context/CartContext/CartContextProvider";
import { useNavigate } from "react-router-dom";

function Login() {
  const { setLogin } = useContext(CartContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    setLogin(true);
    navigate("/product");
  };

  return (
    <div>
      <p>LOGIN PAGE</p>
      <button onClick={handleLogin}>LOGIN</button>
    </div>
  );
}

export default Login;
