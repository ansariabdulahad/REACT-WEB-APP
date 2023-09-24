import { Card, Col, Container, Row } from 'react-bootstrap';
import './Testimonials.css';

import testimonials from '../../../json-api/testimonials.json';

const Cards = ({ testimonial }) => {
    const design = (
        <Col md className="mt-5 mt-md-0">
            <Card className="main-card shadow">
                <Card.Body className="text-center">
                    <div className="icon-box">
                        <img src={testimonial.src} alt="img-1" />
                    </div>
                    <p>{testimonial.descriptionOne}</p>
                    <p>{testimonial.descriptionTwo}</p>
                    <h5 style={{ color: "#1dcd8c" }}>{testimonial.clientName}</h5>
                </Card.Body>
            </Card>
        </Col>
    );
    return design;
}

const Testimonials = () => {
    const design = (
        <div style={{ backgroundColor: "grey", padding: "5px" }}>
            <div className='testimonials-bg shadow'>
                <Container className='testimonials p-5'>
                    <h1>Client Testimonials</h1>
                    <p className='text-center fw-bold mb-3'>Boost your product and service's credibility by <br /> adding testimonials from your clients</p>
                    <Row>
                        {
                            testimonials.map((testimonial, index) => {
                                return <Cards testimonial={testimonial} key={index} />
                            })
                        }
                    </Row>
                </Container>
            </div>
        </div>
    );
    return design;
}

export default Testimonials;