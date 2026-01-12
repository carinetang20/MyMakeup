//define a type for the product
import type { Product, Shade, Variant } from "../types/product";
import { useState } from "react";

type ProductCardProps = {
  product: Product;
  onAddToCart: (product: Product, shade?: Shade, variant?: Variant) => void;
};

function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [selectedShade, setSelectedShade] = useState<Shade | null>(
    product.shades ? product.shades[0] : null
  );
  const [selectedVariant, setSelectedVariant] = useState<{
    label: string;
    description?: string;
  } | null>(null);

  return (
    <div className="class">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>RM {product.price.toFixed(2)}</p>
      {/*Swatches */}
      {product.shades && (
        <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
          {product.shades.map((shade) => (
            <button
              key={shade.label}
              onClick={() => setSelectedShade(shade)}
              style={{
                width: 26,
                height: 26,
                borderRadius: "50%",
                border:
                  selectedShade?.label === shade.label
                    ? "3px solid #000"
                    : "1px solid #ccc",
                backgroundColor: Array.isArray(shade.color)
                  ? shade.color[0]
                  : shade.color,

                cursor: "pointer",
              }}
              title={shade.label}
            />
          ))}
        </div>
      )}
      {/*Variants */}

      {product.variants && (
        <div
          className="variants"
          style={{ display: "flex", gap: 8, marginBottom: 12 }}
        >
          {product.variants.map((variant) => (
            <button
              key={variant.label}
              className={`variant-btn ${
                selectedVariant?.label === variant.label ? "active" : ""
              }`}
              onClick={() => setSelectedVariant(variant)}
            >
              {variant.label}
            </button>
          ))}
        </div>
      )}
      {/* Add to Cart */}
      <button
        onClick={() => {
          if (product.shades && !selectedShade) return;
          onAddToCart(
            product,
            selectedShade ?? undefined,
            selectedVariant ?? undefined
          );
        }}
      >
        Add to Cart
      </button>

      {product.shades && !selectedShade && (
        <p style={{ color: "crimson", fontSize: 12 }}>Choose a shade first</p>
      )}
    </div>
  );
}

export default ProductCard;
