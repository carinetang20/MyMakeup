export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  shades?: Shade[];
  variants?: Variant[];
  selectedShade?: Shade;
  selectedVariant?: Variant;
};

export type Shade = {
  label: string;
  color: string | string[];
};

export type Variant = {
  label: string;
  description?: string;
};

export type CartItem = Product & {
  selectedShade?: { label: string; color: string };
  selectedVariant?: { label: string; description?: string };
};
