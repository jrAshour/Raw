import { useState } from "react";

export default function BuyerJourneyPrototype() {
  const [stage, setStage] = useState("onboarding");
  const [selectedPurpose, setSelectedPurpose] = useState(null);
  const [cart, setCart] = useState([]);
  const [deliveryDate, setDeliveryDate] = useState("");

  const products = [
    { id: 1, name: "White Portland Cement", price: "500 SAR", verified: true },
    { id: 2, name: "Sand", price: "300 SAR", verified: false },
  ];

  const handlePurposeSelection = (purpose) => {
    setSelectedPurpose(purpose);
    setStage("home");
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    setStage("checkout");
  };

  const handleCheckout = () => {
    setStage("confirmation");
  };

  return (
    <div>
      {stage === "onboarding" && (
        <div>
          <h1>Welcome to Raw Materials Marketplace</h1>
          <p>Select your purpose:</p>
          <button onClick={() => handlePurposeSelection("buy")}>Buy</button>
          <button onClick={() => handlePurposeSelection("sell")}>Sell</button>
          <button onClick={() => handlePurposeSelection("resell")}>Resell</button>
        </div>
      )}

      {stage === "home" && (
        <div>
          <h1>Marketplace - {selectedPurpose === "buy" ? "Buy Materials" : "Other Purposes"}</h1>
          <div>
            {products.map((product) => (
              <div key={product.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <p>{product.verified ? "Verified" : "Not Verified"}</p>
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {stage === "checkout" && (
        <div>
          <h1>Checkout</h1>
          <form>
            <label>Delivery Date:</label>
            <input type="date" value={deliveryDate} onChange={(e) => setDeliveryDate(e.target.value)} required />
            <button type="button" onClick={handleCheckout}>
              Confirm Order
            </button>
          </form>
        </div>
      )}

      {stage === "confirmation" && (
        <div>
          <h1>Order Confirmed!</h1>
          <p>Thank you for your order. Your materials will be delivered on {deliveryDate}.</p>
        </div>
      )}
    </div>
  );
}
