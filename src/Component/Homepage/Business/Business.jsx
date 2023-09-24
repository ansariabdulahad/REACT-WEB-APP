import Column from '../Category/Column/Column';
import './Business.css';

import { Container, Row } from "react-bootstrap";

import services from '../../../json-api/services.json';

// const services = [
//     {
//         "icon": "fa fa-play",
//         "title": "BUSINESS MODEL",
//         "subTitle": "You can also use this space for other purposes where the information is best presented as mere teasers to other individualized pages."
//     },
//     {
//         "icon": "fa fa-signal",
//         "title": "BUSINESS MODEL",
//         "subTitle": "You can also use this space for other purposes where the information is best presented as mere teasers to other individualized pages."
//     },
//     {
//         "icon": "fa fa-star",
//         "title": "BUSINESS MODEL",
//         "subTitle": "You can also use this space for other purposes where the information is best presented as mere teasers to other individualized pages."
//     }
// ];

const Business = () => {
    const design = (
        <div style={{ backgroundColor: "grey", padding: "5px" }}>
            <div className='business-bg shadow'>
                <Container className='business p-5'>
                    <h1>Our Services</h1>
                    <p className='text-white w-75 mb-5'>Share your services or product offerings here. Present them as simple headers that
                        can lead out to their pages where you can expound on them further. You can also
                        use this space for other purposes where the information is best presented as mere
                        teasers to other individualized pages.
                    </p>
                    <Row>
                        {
                            services.map((service, index) => {
                                return <Column data={service} key={index} />
                            })
                        }
                    </Row>
                </Container>
            </div>
        </div>
    );
    return design;
}

export default Business;