import { useRef } from 'react';
import { Container, Card, Button } from 'react-bootstrap';

const clients = [
  { id: 1, name: 'Sampath', company: 'Global Solutions', bgColor: '#f8d7da', textColor: '#842029' },
  { id: 2, name: 'Cream House', company: 'Food & Bev', bgColor: '#d1e7dd', textColor: '#0f5132' },
  { id: 3, name: 'Ad Clipse', company: 'Marketing Inc.', bgColor: '#cff4fc', textColor: '#055160' },
  { id: 4, name: 'Tech Corp', company: 'Technology Partners', bgColor: '#e2e3e5', textColor: '#41464b' },
  { id: 5, name: 'Innovation Labs', company: 'Research Co.', bgColor: '#fff3cd', textColor: '#664d03' },
];

const Clients = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -250 : 250;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="team" className="py-5 bg-light">
      <Container fluid className="px-md-5">
        <div className="d-flex justify-content-between align-items-end mb-4">
          <div>
            <h2 className="fw-bold mb-2">People We Work With</h2>
            <p className="text-secondary mb-0">Trusted by leading companies and visionaries.</p>
          </div>
          <div className="d-none d-md-flex gap-2">
            <Button variant="outline-secondary" className="rounded-circle rounded-btn" onClick={() => scroll('left')}>
              <i className="bi bi-chevron-left"></i>
            </Button>
            <Button variant="outline-secondary" className="rounded-circle rounded-btn" onClick={() => scroll('right')}>
              <i className="bi bi-chevron-right"></i>
            </Button>
          </div>
        </div>

        <div className="horizontal-scroll-container pb-3 pt-2" ref={scrollRef}>
          {clients.map((client) => (
            <div key={client.id} className="horizontal-scroll-item" style={{ width: '220px' }}>
              <Card className="h-100 border-0 shadow-sm hover-card rounded-4 text-center overflow-hidden">
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ height: '120px', backgroundColor: client.bgColor, color: client.textColor }}
                >
                  <h4 className="fw-bold mb-0">{client.name.charAt(0)}</h4>
                </div>
                <Card.Body className="p-4">
                  <Card.Title className="fw-bold mb-1 fs-5">{client.name}</Card.Title>
                  <Card.Text className="text-secondary small mb-0">
                    {client.company}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Clients;
