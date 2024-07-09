import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  function navigeMe() {
    navigate("/cart");
  }

  return (
    <div>
      <h1>HOME PAGE</h1>
      <div>
        <button onClick={navigeMe}>Cart</button>
        <button onClick={() => navigate("/singleproduct")}>Single Product</button>
      </div>
    </div>
  );
}

export default HomePage;
