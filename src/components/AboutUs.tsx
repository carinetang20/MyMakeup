import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaPinterest,
} from "react-icons/fa";

export default function AboutUs() {
  return (
    <div className="about-us">
      <h1>
        About <strong>MYMAKEUP</strong>
      </h1>
      <p>
        Welcome to <strong>MYMAKEUP</strong>! We are passionate about helping
        you to feel confident and beautiful with high-quality, cruelty-free
        makeup products.
      </p>
      <p>
        Our mission is to provide a wide range of cosmetics that suit every skin
        type and skin tone. We believe that makeup is a form of self-expression
        and empowerment, and we are dedicated to offering products that inspire
        creativity and individuality.
      </p>
      <p>
        At MYMAKEUP, we value quality, sustainability, and customer
        satisfaction. We carefully select every ingredient to ensure our
        products are gentle, nourishing, and suitable for all skin types—even
        the most sensitive skin. We prioritize safety, effectiveness, and
        comfort, so you can enjoy flawless makeup without compromise. We also
        believe that makeup is a form of self-expression and we are here to help
        you shine.
      </p>
      <p>
        Beauty should be accessible to everyone. That’s why we offer
        premium-quality products at affordable prices, so you can look and feel
        amazing without breaking the bank.
      </p>
      <h2>
        Why Choose <strong>MYMAKEUP</strong>?
      </h2>
      <ul>
        <li>High-quality, cruelty-free products</li>
        <li>Wide range of shades and products</li>
        <li>Expert advice, tutorials and inspiration</li>
        <li>Suitable for all skin types and tones</li>
        <li>Formulated with safe and nourishing ingredients</li>
      </ul>
      <p>
        Thank you for choosing <strong>MYMAKEUP</strong> - where beauty meets
        confidence!
      </p>

      <h2>Follow Us !</h2>
      <p>
        Stay connected and get inspired with our latest products, tutorials, and
        beauty tips !
      </p>

      {
        <div>
          <h2>Follow Us!</h2>
          <p>
            Stay connected and get inspired with our latest products, tutorials,
            and beauty tips:
          </p>
          <div style={{ display: "flex", gap: "20px", fontSize: "2rem" }}>
            <a
              href="https://www.instagram.com/mymakeup"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram color="#E1306C" />
            </a>
            <a
              href="https://x.com/mymakeup"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter color="#1DA1F2" />
            </a>
            <a
              href="https://www.facebook.com/mymakeup"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook color="#1877F2" />
            </a>
            <a
              href="https://www.pinterest.com/mymakeup"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPinterest color="#E60023" />
            </a>
          </div>
        </div>
      }
    </div>
  );
}
