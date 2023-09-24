import { Card, Col } from "react-bootstrap";

const Column = ({ data }) => {
    const design = (
        <>
            <Col md className="mt-5 mt-md-0">
                <Card className="main-card">
                    <Card.Body className="text-center">
                        <div className="icon-box">
                            <i className={data.icon}></i>
                        </div>
                        <Card.Title className="fw-bold">{data.title}</Card.Title>
                        <Card.Text style={{ fontFamily: "sen-serif" }}>{data.subTitle}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
    return design;
}

export default Column;