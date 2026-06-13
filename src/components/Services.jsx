import { useRef } from 'react';
import { Container, Card, Button } from 'react-bootstrap';

const services = [
  { id: 1, title: 'Web Development', icon: 'bi-code-slash', desc: 'Custom, responsive websites built with modern frameworks.' },
  { id: 2, title: 'Mobile Apps', icon: 'bi-phone', desc: 'Native and cross-platform mobile applications for iOS and Android.' },
  { id: 3, title: 'Cloud Solutions', icon: 'bi-cloud', desc: 'Scalable cloud infrastructure and seamless migration services.' },
  { id: 4, title: 'AI & Machine Learning', icon: 'bi-cpu', desc: 'Intelligent algorithms to automate and optimize your workflows.' },
  { id: 5, title: 'Data Analytics', icon: 'bi-bar-chart', desc: 'Actionable insights derived from your complex business data.' },
  { id: 6, title: 'Consulting', icon: 'bi-briefcase', desc: 'Expert technical advice to guide your digital transformation journey.' },
];

const Services = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-5 bg-white">
      <Container fluid className="px-md-5">
        <div className="d-flex justify-content-between align-items-end mb-4">
          <div>
            <h2 className="fw-bold mb-2">Services We Offer</h2>
            <p className="text-secondary mb-0">Discover our comprehensive range of digital solutions.</p>
          </div>
          <div className="d-none d-md-flex gap-2">
            <Button variant="outline-primary" className="rounded-circle rounded-btn" onClick={() => scroll('left')}>
              <i className="bi bi-arrow-left"></i>
            </Button>
            <Button variant="outline-primary" className="rounded-circle rounded-btn" onClick={() => scroll('right')}>
              <i className="bi bi-arrow-right"></i>
            </Button>
          </div>
        </div>

        <div className="horizontal-scroll-container pb-3 pt-2" ref={scrollRef}>
          {services.map((service) => (
            <div key={service.id} className="horizontal-scroll-item" style={{ width: '320px' }}>
              <Card className="h-100 border-0 shadow-sm hover-card rounded-4">
                <Card.Body className="p-4 d-flex flex-column">
                  <div className="icon-wrapper bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center mb-4" style={{ width: '60px', height: '60px' }}>
                    <i className={`bi ${service.icon} fs-3`}></i>
                  </div>
                  <Card.Title className="fw-bold mb-3 fs-5">{service.title}</Card.Title>
                  <Card.Text className="text-secondary mb-4 flex-grow-1">
                    {service.desc}
                  </Card.Text>
                  <a href="#contact" className="text-primary text-decoration-none fw-semibold mt-auto d-inline-flex align-items-center">
                    Learn more <i className="bi bi-arrow-right ms-2"></i>
                  </a>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>
      <style>{`
        .rounded-btn {
          width: 40px;
          height: 40px;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </section>
  );
};

export default Services;
