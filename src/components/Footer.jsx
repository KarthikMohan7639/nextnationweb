import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer id="contact" className="bg-dark text-white pt-5 pb-4">
      <Container>
        <Row className="gy-4">
          <Col lg={4} md={6}>
            <h4 className="fw-bold text-primary mb-3">NextNation</h4>
            <p className="text-white-50 mb-4 pe-md-4">
              Delivering innovative software services and cutting-edge digital solutions to accelerate your business growth.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-white-50 text-decoration-none hover-white">
                <i className="bi bi-linkedin fs-5"></i>
              </a>
              <a href="#" className="text-white-50 text-decoration-none hover-white">
                <i className="bi bi-twitter-x fs-5"></i>
              </a>
              <a href="#" className="text-white-50 text-decoration-none hover-white">
                <i className="bi bi-github fs-5"></i>
              </a>
              <a href="#" className="text-white-50 text-decoration-none hover-white">
                <i className="bi bi-facebook fs-5"></i>
              </a>
            </div>
          </Col>

          <Col lg={4} md={6}>
            <h5 className="fw-bold mb-3">Contact Us</h5>
            <ul className="list-unstyled text-white-50">
              <li className="mb-2 d-flex align-items-start gap-2">
                <i className="bi bi-geo-alt-fill text-primary mt-1"></i>
                <span>
                  NextNation, 5th Main Rd,<br />
                  Sector 7, HSR Layout,<br />
                  Bengaluru, Karnataka 560102
                </span>
              </li>
              <li className="mb-2 d-flex align-items-center gap-2">
                <i className="bi bi-envelope-fill text-primary"></i>
                <a href="mailto:support@nextnation.co" className="text-white-50 text-decoration-none hover-white">
                  support@nextnation.co
                </a>
              </li>
            </ul>
          </Col>

          <Col lg={4} md={12}>
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <div className="d-flex flex-column gap-2 text-white-50">
              <a href="#home" className="text-white-50 text-decoration-none hover-white">Home</a>
              <a href="#services" className="text-white-50 text-decoration-none hover-white">Services</a>
              <a href="#team" className="text-white-50 text-decoration-none hover-white">Team</a>
              <a href="#testimonials" className="text-white-50 text-decoration-none hover-white">Testimonials</a>
            </div>
          </Col>
        </Row>

        <hr className="my-4 border-secondary opacity-25" />

        <Row>
          <Col className="text-center text-white-50 small">
            &copy; {new Date().getFullYear()} NextNation. All rights reserved.
          </Col>
        </Row>
      </Container>
      <style>{`
        .hover-white:hover {
          color: white !important;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
