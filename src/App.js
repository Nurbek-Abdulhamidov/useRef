import { useState, useEffect } from "react";
function App() {
  // Declare state variables
  const [count, setCount] = useState(0);
  const [product, setProduct] = useState("Eggs");
  useEffect(() => {
    console.log(`${product} will rule the world!`);
  });
  return (
    <div>
      Current {product}'s count: {count}
      <div>
        <button onClick={() => setCount(count + 1)}>Add to cart</button>
        <button onClick={() => setCount(count - 1)}>Remove from cart</button>
        Change Product:{" "}
        <input type="text" onChange={(e) => setProduct(e.target.value)} />
      </div>
    </div>
  );
}

export default App;
