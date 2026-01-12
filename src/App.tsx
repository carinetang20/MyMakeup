import Navbar from "./components/navbar";
import Header from "./components/Header";
import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Orders from "./components/MyOrders";
import { products } from "./components/data/products";
import AboutUs from "./components/AboutUs";
import type { Product, Shade } from "./types/product";
import MyCart from "./components/MyCart";

function App() {
  const [cart, setCart] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Product[]>([]);
  const [activeSection, setActiveSection] = useState<
    "products" | "orders" | "about" | "mycart"
  >("products");

  const handleAddToCart = (product: Product, shade?: Shade) => {
    setCart([...cart, { ...product, selectedShade: shade }]);
  };

  const handlePurchase = () => {
    if (cart.length === 0) return;

    setOrders((prevOrders) => [...prevOrders, ...cart]);
    setCart([]);
    setActiveSection("orders");
  };

  return (
    <div>
      <Navbar setActiveSection={setActiveSection} />

      {activeSection === "products" && (
        <>
          <Header /> {/* Logo + Title */}
          <div className="product-grid">
            {products.map((products) => (
              <ProductCard
                key={products.id}
                product={products}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
          <h2>Shopping Cart ({cart.length})</h2>
        </>
      )}
      {activeSection === "orders" && <Orders orders={orders} />}
      {activeSection === "about" && <AboutUs />}
      {activeSection === "mycart" && (
        <MyCart cart={cart} onPurchase={handlePurchase} />
      )}
    </div>
  );
}

export default App;
