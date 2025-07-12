export default function Contact() {
  return (

<section id="contact" className="contact">
  <div className="container">
    <h2>Contact Us</h2>
    <div className="contact-content">
      <div className="contact-info">
        <h4>Get In Touch</h4>
        <p>
          <i className="fas fa-map-marker-alt" /> 123 Lorem Street, Ipsum City,
          LC 12345
        </p>
        <p>
          <i className="fas fa-phone" /> (555) 123-4567
        </p>
        <p>
          <i className="fas fa-envelope" /> info@vineandvera.com
        </p>
        <h4>Hours</h4>
        <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
        <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
      </div>
      <div className="contact-form">
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="Your Name"
            required=""
          />
          <input
            type="email"
            className="form-control"
            placeholder="Your Email"
            required=""
          />
          <input
            type="text"
            className="form-control"
            placeholder="Subject"
            required=""
          />
          <textarea
            className="form-control"
            rows={5}
            placeholder="Your Message"
            required=""
            defaultValue={""}
          />
          <button type="submit" className="btn btn-custom">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</section>


  );
}
