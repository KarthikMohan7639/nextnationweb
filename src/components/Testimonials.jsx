import { useRef } from 'react';
import { Container, Card, Button } from 'react-bootstrap';

const testimonials = [
  { id: 1, reason: 'Fast Delivery', quote: 'NextNation delivered our project weeks ahead of schedule without compromising on quality.', name: 'Sarah J.', role: 'CTO, Tech Corp', rating: 5 },
  { id: 2, reason: 'Dedicated Support', quote: 'Their 24/7 support team is incredible. They are always there when we need them most.', name: 'Michael T.', role: 'Founder, Ad Clipse', rating: 5 },
  { id: 3, reason: 'Innovative Solutions', quote: 'They brought fresh, innovative ideas to the table that completely transformed our product.', name: 'Elena R.', role: 'Product Manager, Innovation Labs', rating: 4 },
  { id: 4, reason: 'Cost Effective', quote: 'Exceptional value for money. They helped us scale our infrastructure while reducing costs.', name: 'David K.', role: 'CEO, Cream House', rating: 5 },
  { id: 5, reason: '24/7 Availability', quote: 'Knowing their team is monitoring our systems around the clock gives us incredible peace of mind.', name: 'Anita P.', role: 'Director of Ops, Global Solutions', rating: 5 },
];

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <i key={index} className={`bi bi-star-fill ${index < rating ? 'text-warning' : 'text-muted opacity-25'} me-1`}></i>
    ));
  };

  return (
    <section id="testimonials" className="py-5 bg-primary text-white">
      <Container fluid className="px-md-5">
        <div className="d-flex justify-content-between align-items-end mb-5">
          <div>
            <h2 className="fw-bold mb-2">Why Customers Love Us</h2>
            <p className="text-white-50 mb-0">Don't just take our word for it.</p>
          </div>
          <div className="d-none d-md-flex gap-2">
            <Button variant="outline-light" className="rounded-circle rounded-btn" onClick={() => scroll('left')}>
              <i className="bi bi-arrow-left"></i>
            </Button>
            <Button variant="outline-light" className="rounded-circle rounded-btn" onClick={() => scroll('right')}>
              <i className="bi bi-arrow-right"></i>
            </Button>
          </div>
        </div>

        <div className="horizontal-scroll-container pb-3" ref={scrollRef}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="horizontal-scroll-item" style={{ width: '350px' }}>
              <Card className="h-100 border-0 rounded-4 bg-white text-dark hover-card">
                <Card.Body className="p-4 d-flex flex-column">
                  <div className="mb-3 d-flex justify-content-between align-items-center">
                    <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill fw-semibold">
                      {testimonial.reason}
                    </span>
                    <div className="fs-6">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  <Card.Text className="fst-italic text-secondary mb-4 flex-grow-1 fs-5 lh-base">
                    "{testimonial.quote}"
                  </Card.Text>
                  <div className="d-flex align-items-center mt-auto border-top pt-3">
                    <div
                      className="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center fw-bold me-3"
                      style={{ width: '40px', height: '40px' }}
                    >
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h6 className="fw-bold mb-0">{testimonial.name}</h6>
                      <small className="text-secondary">{testimonial.role}</small>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
