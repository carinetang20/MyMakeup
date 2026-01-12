import type { Product } from "../types/product";

type MyOrderProps = {
  orders: Product[];
};

export default function Orders({ orders }: MyOrderProps) {
  if (orders.length === 0) {
    return <p> Your have no orders yet.</p>;
  }

  return (
    <div className="my-orders">
      <h2>My Orders</h2>
      <ul>
        {orders.map((product) => (
          <li key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <p>{product.name}</p>
            <p>${product.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
