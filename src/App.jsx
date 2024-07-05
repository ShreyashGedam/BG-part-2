import { useContext } from "react";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import { CartContext } from "./Context/CartContext/CartContextProvider";

function App() {
  const { funcDecrement } = useContext(CartContext);

  return (
    <div>
      <Navbar />
      <Card />
      <button onClick={funcDecrement}>outsude button</button>
    </div>
  );
}

export default App;

// parent => child (NavBar)
//        => child (Card)

// context - useContext Hook
// context provides us central state management.
