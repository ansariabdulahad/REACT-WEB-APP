import './Benifits.css';

import { Col, Container, Row } from "react-bootstrap";
import data from '../../../json-api/list.json';

// const data = [
//     {
//         "icon": "fa fa-check",
//         "title": "100% Project based learning",
//         "subTitle": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt quo iure corrupti ducimus dicta rerum nostrum."
//     },
//     {
//         "icon": "fa fa-check",
//         "title": "Live call supports",
//         "subTitle": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt quo iure corrupti ducimus dicta rerum nostrum."
//     },
//     {
//         "icon": "fa fa-check",
//         "title": "High chance of selection",
//         "subTitle": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt quo iure corrupti ducimus dicta rerum nostrum."
//     },
//     {
//         "icon": "fa fa-check",
//         "title": "Video Access Timing",
//         "subTitle": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt quo iure corrupti ducimus dicta rerum nostrum."
//     }
// ];

const List = ({ item }) => {
    const design = (
        <div className='d-flex mb-3'>
            <div>
                <div className="icon-box">
                    <i className={item.icon}></i>
                </div>
            </div>
            <div className='px-3'>
                <h4>{item.title}</h4>
                <p>{item.subTitle}</p>
            </div>
        </div>
    );
    return design;
}

const Benifits = () => {
    const design = (
        <div className='benifit-bg'>
            <Container className="benifits mb-5 bg-white p-3 shadow">
                <h1 className='mb-5'>Benifits of learning from Just For Code !</h1>
                <Row className='reverse'>
                    <Col md>
                        {
                            data.map((item, index) => {
                                return <List item={item} key={index} />
                            })
                        }
                    </Col>
                    <Col md className='d-flex justify-content-center align-items-center mb-3'>
                        <img src="man.jpg" alt="tech-logo" width="100%" className='rounded-circle' />
                    </Col>
                </Row>
            </Container>
        </div>
    );
    return design;
}

export default Benifits;