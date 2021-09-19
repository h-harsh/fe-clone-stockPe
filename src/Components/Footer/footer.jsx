import logo from "../../resources/StockPeNavBarLogo.png";
import "./footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <section className="footer-container-p1">
          <img className="footer-logo" src={logo} alt="" />
        </section>
        <section className="footer-container-p2">
          <div className="fct-inner-p2">
            <h4>About</h4>
            <p>
              We are simplifying stocks to create a new era of financially
              educated students in India.
            </p>
          </div>
          <div className="fct-inner-p2">
            <h4>Get in touch</h4>
            <p>Questions or feedbacks? We would love to hear from you</p>
            <h4><strong>Email us at</strong></h4>
            <p>Hello@stockpe.tech</p>
          </div>
          <div className="fct-inner-p2">
            <h4>Get our app</h4>
            <img src="https://stockpe.in/img/button.png" alt="" />
          </div>
          <div className="fct-inner-p2">
            <h4>Social Media</h4>
            <div>
              <img src="https://stockpe.in/img/facebook.png" alt="" />
              <img src="https://stockpe.in/img/instagram.png" alt="" />
              <img src="https://stockpe.in/img/linkedin.png" alt="" />
            </div>
          </div>
        </section>
        <section className="footer-container-p3">
          <p>© 2021 StockPe | All Rights Reserved.</p>
          <p>Made with ❤️ for Indians</p>
        </section>
      </div>
    </footer>
  );
};
