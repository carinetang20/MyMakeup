import type { Product, Shade, Variant } from "../types/product";

export type CartItem = Product & {
  selectedShade?: Shade;
  selectedVariant?: Variant;
};

type Props = {
  cart: CartItem[];
  onPurchase: () => void;
};

export default function MyCart({ cart, onPurchase }: Props) {
  if (cart.length === 0) {
    return <h3>You have no items in your cart.</h3>;
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>My Cart({cart.length})</h2>

      {cart.map((item) => (
        <div className="cart-item">
          <img src={item.image} alt={item.name} className="product-image" />
          <div>
            <strong>{item.name}</strong>
            {item.selectedShade && <span> ({item.selectedShade.label})</span>}
          </div>
          - RM {item.price}
        </div>
      ))}

      <h3>Total : RM {total}</h3>
      <button onClick={onPurchase}>Purchase</button>
    </div>
  );
}
