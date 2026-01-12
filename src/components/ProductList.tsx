import ProductCard from "../components/ProductCard";
import { products } from "../components/data/products";
import type { Product } from "../types/product";

type ProductListProps = {
  onAddToCart: (product: Product) => void;
};

function ProductList({ onAddToCart }: ProductListProps) {
  return (
    <div className="product-grid">
      {products.map((product: Product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;
