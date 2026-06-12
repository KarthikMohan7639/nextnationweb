import { Container, Row, Col, Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <section id="home" className="bg-light py-5 py-lg-0" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <Container>
        <Row className="align-items-center">
          <Col lg={8} className="mx-auto text-center">
            <h1 className="display-3 fw-bold mb-4 text-dark">
              Building the Future with <span className="text-primary">NextNation</span>
            </h1>
            <p className="lead mb-5 text-secondary fs-4">
              We deliver innovative software services and cutting-edge digital solutions to accelerate your business growth.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <Button variant="primary" size="lg" className="px-5 py-3 rounded-pill fw-bold shadow-sm">
                Get Started
              </Button>
              <Button variant="outline-primary" size="lg" className="px-5 py-3 rounded-pill fw-bold">
                Contact Us
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
