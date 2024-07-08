import { createContext, useState } from "react";

export const CartContext = createContext(); // here we tell react that we are creating a central state.

function CartContextProvider({ children }) {
  const [count, setCount] = useState(0);
  const [login, setLogin] = useState(false);

  const funcDecrement = () => {
    setCount(count - 1);
  };

  return (
    <CartContext.Provider
      value={{ count, setCount, funcDecrement, login, setLogin }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
