import foundationImg from "../../assets/images/foundation.jpg";
import mascaraImg from "../../assets/images/mascara.jpg";
import lipglossImg from "../../assets/images/lipgloss.jpg";
import blushImg from "../../assets/images/blush.jpg";
import mascara2Img from "../../assets/images/mascara2.jpeg";
import lipstickImg from "../../assets/images/lipstick.jpeg";
import mistImg from "../../assets/images/mist.jpg";
import eyeshadowImg from "../../assets/images/eyeshadow.jpg";
import concealerImg from "../../assets/images/concealer.jpg";
import eyelinerImg from "../../assets/images/eyeliner.jpg";
import makeupremoverImg from "../../assets/images/makeupremover.jpg";
import primerImg from "../../assets/images/primer.jpg";
import brightenerImg from "../../assets/images/brightener.jpg";
import vinylinkImg from "../../assets/images/vinylink.jpg";
import powderfoundationImg from "../../assets/images/powderfoundation.jpg";
import bronzerImg from "../../assets/images/bronzer.jpg";
import type { Product } from "../../types/product";

export const products: Product[] = [
  {
    id: 1,
    name: "MATTE LIQUID FOUNDATION",
    price: 56.9,
    image: foundationImg,
    shades: [
      { label: "Light", color: "#F5D5AA" },
      { label: "Medium", color: "#D7A46A" },
      { label: "Tan", color: "#B67B45" },
      { label: "Deep", color: "#7A4A2E" },
    ],
  },
  {
    id: 2,
    name: "FASHION LASH MASCARA",
    price: 34.9,
    image: mascaraImg,
    shades: [
      { label: "Black", color: "#0A0A0A" },
      { label: "Brown", color: "#4B3621" },
      { label: "Blue", color: "#1F3C88" },
      { label: "Purple", color: "#6A0DAD" },
      { label: "Clear", color: "#E5E5E5" },
    ],
  },
  {
    id: 3,
    name: "CRYSTAL LIP GLOSS",
    price: 24.9,
    image: lipglossImg,
    shades: [
      { label: "Rose", color: "#C75B7A" },
      { label: "Nude", color: "#D9A796" },
      { label: "Berry", color: "#7A2E4D" },
      { label: "Red", color: "#C1121F" },
    ],
  },

  {
    id: 4,
    name: "LIQUID BLUSH GLOW",
    price: 34.5,
    image: blushImg,
    shades: [
      { label: "Peach Glow", color: "#F5A58A" },
      { label: "Rose Glow", color: "#D86A7A" },
      { label: "Coral Glow", color: "#FF7F6A" },
      { label: "Berry Glow", color: "#B14763" },
      { label: "Soft Pink", color: "#F8A6B5" },
    ],
  },
  {
    id: 5,
    name: "VOLUME UP MASCARA",
    price: 36.9,
    image: mascara2Img,
    shades: [
      { label: "Black", color: "#0A0A0A" },
      { label: "Brown", color: "#4B3621" },
      { label: "Blue", color: "#1F3C88" },
      { label: "Purple", color: "#6A0DAD" },
      { label: "Clear", color: "#E5E5E5" },
    ],
  },
  {
    id: 6,
    name: "MATTE FINISH LIPSTICK",
    price: 30.0,
    image: lipstickImg,
    shades: [
      { label: "Nude Beige", color: "#C89B7B" },
      { label: "Dusty Rose", color: "#BF6A75" },
      { label: "Classic Red", color: "#B11226" },
      { label: "Deep Wine", color: "#61112C" },
      { label: "Chocolate Brown", color: "#4A2C1A" },
    ],
  },
  {
    id: 7,
    name: "DREAM SATIN SETTING SPRAY",
    price: 21.5,
    image: mistImg,
    variants: [
      { label: "Matte Finish", description: "Controls oil and shine" },
      {
        label: "Glow Finish",
        description: "Illuminates skin for a radiant look",
      },
    ],
  },
  {
    id: 8,
    name: "MINI PALETTE EYE SHADOW",
    price: 47.5,
    image: eyeshadowImg,
    shades: [
      { label: "Warm Neutrals 1", color: "#C8A27A" },
      { label: "Warm Neutrals 2", color: "#8B5E3C" },
      { label: "Warm Neutrals 3", color: "#3B2416" },
      { label: "Warm Neutrals 4", color: "#F2D8B3" },
    ],
  },
  {
    id: 9,
    name: "Eraser Concealer",
    price: 29.8,
    image: concealerImg,
    shades: [
      { label: "Light", color: "#F3DCC6" },
      { label: "Light Medium", color: "#E8C3A2" },
      { label: "Medium", color: "#D4A679" },
      { label: "Tan", color: "#B98255" },
      { label: "Deep", color: "#8A552E" },
    ],
  },
  {
    id: 10,
    name: "Mechanical Eyeliner",
    price: 39.8,
    image: eyelinerImg,
    shades: [
      { label: "Blackest Black", color: "#000000" },
      { label: "Charcoal", color: "#3B3B3B" },
      { label: "Chocolate Brown", color: "#4A2C1D" },
      { label: "Espresso", color: "#2B1A12" },
      { label: "Navy Blue", color: "#0F275A" },
      { label: "Plum", color: "#4A215C" },
    ],
  },
  {
    id: 11,
    name: "MAKEUP REMOVER",
    price: 19.0,
    image: makeupremoverImg,
    variants: [
      {
        label: "Oil-Based",
        description: "Removes long-lasting & waterproof makeup",
      },
      {
        label: "Foaming Cleanser",
        description: "Lightweight daily makeup remover",
      },
    ],
  },
  {
    id: 12,
    name: "Primer + Green Color Corrector",
    price: 52.8,
    image: primerImg,
    shades: [
      { label: "Light Green", color: "#A0D9A0" }, // subtle green for light skin
      { label: "Medium Green", color: "#77C177" }, // medium coverage
      { label: "Deep Green", color: "#4F914F" }, // for darker skin or intense redness
    ],
  },
  {
    id: 13,
    name: "Instant Age Rewind Brightener",
    price: 34.5,
    image: brightenerImg,
    shades: [
      { label: "Fair", color: "#F9E5D7" },
      { label: "Light", color: "#F3DCC6" },
      { label: "Light Medium", color: "#E8C3A2" },
      { label: "Medium", color: "#D4A679" },
      { label: "Tan", color: "#B98255" },
      { label: "Deep", color: "#8A552E" },
    ],
  },
  {
    id: 14,
    name: "Vinyl Ink Liquid Lipcolor",
    price: 36.8,
    image: vinylinkImg,
    shades: [
      { label: "Barely Nude", color: "#F3C6B8" },
      { label: "Candy Pink", color: "#FF87A2" },
      { label: "Red Carpet", color: "#C1121F" },
      { label: "Berry Rush", color: "#8B1E4F" },
      { label: "Violet Pop", color: "#5C2C8A" },
      { label: "Chocolate Gloss", color: "#4B2C20" },
    ],
  },
  {
    id: 15,
    name: "HYBRID POWDER FOUNDATION",
    price: 40.0,
    image: powderfoundationImg,
    shades: [
      { label: "Porcelain", color: "#FBE8DE" },
      { label: "Ivory", color: "#F5D3B3" },
      { label: "Light Beige", color: "#EAC29A" },
      { label: "Medium Beige", color: "#D8A87D" },
      { label: "Tan", color: "#C6865E" },
      { label: "Deep", color: "#9B5634" },
      { label: "Rich", color: "#7D3B1F" },
    ],
  },
  {
    id: 16,
    name: "Fit Me Bronzer",
    price: 39.9,
    image: bronzerImg,
    shades: [
      { label: "Light", color: "#F5D1A3" },
      { label: "Medium", color: "#E1A96B" },
      { label: "Medium Deep", color: "#C57A42" },
      { label: "Deep", color: "#8C4C27" },
      { label: "Rich", color: "#5C2E18" },
    ],
  },
];
