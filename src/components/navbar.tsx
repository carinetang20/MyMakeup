import logoImg from "../assets/logo.png";
type NavbarProps = {
  setActiveSection: React.Dispatch<
    React.SetStateAction<"products" | "orders" | "about" | "mycart">
  >;
};

export default function Navbar({ setActiveSection }: NavbarProps) {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logoImg} alt="Logo" />
      </div>
      <ul className="nav-links">
        <li>
          <button onClick={() => setActiveSection("products")}>Home</button>
        </li>

        <li>
          <button onClick={() => setActiveSection("mycart")}>My Cart</button>
        </li>

        <li>
          <button onClick={() => setActiveSection("orders")}>My Orders</button>
        </li>

        <li>
          <button
            onClick={() => {
              setActiveSection("about");
            }}
          >
            About Us
          </button>
        </li>
      </ul>
    </nav>
  );
}
