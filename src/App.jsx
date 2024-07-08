import { useContext } from "react";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import { CartContext } from "./Context/CartContext/CartContextProvider";
import HomePage from "./pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage/ProductPage";
import Login from "./pages/Login/Login";

function App() {
  const { funcDecrement } = useContext(CartContext);

  return (
    <div>
      <Navbar />
      {/* <Card /> */}
      {/* <button onClick={funcDecrement}>outsude button</button> */}
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/product" element={<ProductPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;

// parent => child (NavBar)
//        => child (Card)

// context - useContext Hook
// context provides us central state management.
