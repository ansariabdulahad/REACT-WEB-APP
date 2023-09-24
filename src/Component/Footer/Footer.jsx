import './Footer.css';

import { Col, Container, Row } from "react-bootstrap";

const users = [
    {
        title: "PHONE",
        "info": "+91 9545282408"
    },
    {
        title: "EMAIL",
        "info": "ansariabdulahad3@gmail.com"
    }
]

const icons = [
    {
        icon: "fa fa-facebook"
    },
    {
        icon: "fa fa-twitter mx-3"
    },
    {
        icon: "fa fa-instagram"
    }
];

const Icon = ({ icon }) => {
    return (
        <i className={icon.icon}></i>
    );
}

const User = ({ user }) => {
    return (
        <div>
            <h5>{user.title}</h5>
            <p className='text-white'>{user.info}</p>
        </div>
    );
}

const Footer = () => {
    const design = (
        <div style={{ backgroundColor: "grey", padding: "5px" }}>
            <footer className='footer-bg shadow'>
                <Container className='footer p-5'>
                    <Row>
                        <Col md>
                            <div>
                                <img src="footer-logo.png" alt="footer-logo" width="100%" />
                            </div>
                        </Col>
                        <Col md={2}></Col>
                        <Col md>
                            <h1 className='text-white mt-5 mb-5'>Contact Us</h1>
                            {
                                users.map((user, index) => {
                                    return <User user={user} key={index} />
                                })
                            }
                            <div>
                                <h5>SOCIAL</h5>
                                <div className='text-white fs-3 social-icon'>
                                    {
                                        icons.map((icon, index) => {
                                            return <Icon icon={icon} key={index} />
                                        })
                                    }
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
    return design;
}

export default Footer;