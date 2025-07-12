export function Footer() {
    return(
        <footer className="footer">
  <div className="container">
    <div className="footer-content">
      <div className="footer-section">
        <h4>Vine And Vera</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore.
        </p>
      </div>
      <div className="footer-section">
        <h4>Quick Links</h4>
        <p>
          <a href="#home">Home</a>
        </p>
        <p>
          <a href="#about">About</a>
        </p>
        <p>
          <a href="#menu">Menu</a>
        </p>
        <p>
          <a href="#services">Services</a>
        </p>
      </div>
      <div className="footer-section">
        <h4>Contact Info</h4>
        <p>123 Lorem Street, Ipsum City</p>
        <p>(555) 123-4567</p>
        <p>info@vineandvera.com</p>
      </div>
    </div>
    <div className="social-links">
      <a href="#">
        <i className="fab fa-facebook" />
      </a>
      <a href="#">
        <i className="fab fa-twitter" />
      </a>
      <a href="#">
        <i className="fab fa-instagram" />
      </a>
      <a href="#">
        <i className="fab fa-linkedin" />
      </a>
    </div>
    <hr style={{ margin: "2rem 0", opacity: "0.3" }} />
    <p>© 2024 Vine And Vera. All rights reserved.</p>
  </div>
</footer>

    )
}