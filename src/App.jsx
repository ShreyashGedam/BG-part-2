import React, { lazy, Suspense, useContext, useEffect } from "react";
// import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import { CartContext } from "./Context/CartContext/CartContextProvider";
import HomePage from "./pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
// import ProductPage from "./pages/ProductPage/ProductPage";
import Login from "./pages/Login/Login";
import Protected from "./components/Protected";
// import Cart from "./pages/Cart/Cart";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import axios from "axios";





const Card = React.lazy(() => import("./components/Card/Card"));
const ProductPage = lazy(() => import("./pages/ProductPage/ProductPage"));





function App() {
  const { funcDecrement } = useContext(CartContext);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    // axios.post("https://fakestoreapi.com/products", {
    //   name: "shreyash",
    // });
  }, []);

  return (
    <div>
      <Navbar />

      {/* <Card /> */}
      {/* <button onClick={funcDecrement}>outsude button</button> */}
      {/* <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/product" element={<ProductPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/product"
          element={
            <Protected>
              <ProductPage />
            </Protected>
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <Protected>
              <Cart />
            </Protected>
          }
        ></Route>
        <Route
          path="/singleproduct"
          element={
            <Protected>
              <SingleProduct />
            </Protected>
          }
        ></Route>
      </Routes> */}







      {/* <Suspense fallback={<div>Loading...</div>}>
        <Card />
      </Suspense> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/product" element={<ProductPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

// parent => child (NavBar)
//        => child (Card)

// context - useContext Hook
// context provides us central state management.
