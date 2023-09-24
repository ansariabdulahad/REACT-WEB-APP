import './BusinessModal.css';

import { Card, Col, Container, Row } from "react-bootstrap";

const BusinessModal = () => {
    const design = (
        <div style={{ backgroundColor: "grey", padding: "5px" }}>
            <div className="business-modal-bg shadow">
                <Container className="business-modal p-5">
                    <Row className='d-flex justify-content-center align-items-center reverse'>
                        <Col md className="mt-5 mt-md-0">
                            <Card className="main-card rounded-5 p-5 shadow">
                                <Card.Body>
                                    <div className="icon-box">
                                        <i className="fa fa-signal"></i>
                                    </div>
                                    <Card.Title className="fw-bold fs-2 mb-3">We'll help perfect your business model.</Card.Title>
                                    <Card.Text style={{ fontFamily: "Verdana" }}>Highlight specific services or products that are
                                        unique to your business here. It can be your
                                        flagship product, or a service that you've
                                        pioneered. Give it room to shine here.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <img src="modal-1.png" alt="modal-logo" width="100%" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
    return design;
}

export default BusinessModal;