import { Navbar, Container, Nav, Image, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

import menus from '../../json-api/menu.json';
import brand from '../../json-api/brand.json';

import './Header.css';

const Menu = ({ item }) => {
    const design = (
        <div>
            <Link
                style={{ color: item.color }}
                data-bs-dismiss="Navbar"
                className={item.isButton ? "btn btn-primary fw-bold mx-3 px-4" : "nav-link"}
                to={item.link}
            >{item.label}</Link>
        </div>
    );
    return design;
}

const DropdownMenu = ({ item }) => {
    const design = (
        <div>
            <NavDropdown title={item.label} id="basic-nav-dropdown">
                <i className="fa fa-caret-up arrow"></i>
                {
                    item.dropdownMenu.map((menu, index) => {
                        return <Menu item={menu} key={index} />
                    })
                }
            </NavDropdown>
        </div>
    );
    return design;
}

const Header = () => {

    const [sticky, setStickey] = useState("fixed-top border-bottom");

    window.onscroll = () => {
        let top = window.scrollY;
        let tmp = "";

        if (top > 100) {
            tmp = "fixed-top border-bottom sticky";
        }
        else {
            tmp = "fixed-top border-bottom";
        }

        setStickey(tmp);
    }

    const design = (
        <>
            <Navbar expand="lg" className={sticky}>
                <Container>
                    <Image alt="logo" src={brand.logo} width="40px" className="animate__animated animate__rotateIn animate__infinite" />
                    <Navbar.Brand href="#home" className="mx-3 fw-bold brand-name text-white">{brand.name}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="justify-content-end w-100">
                            {
                                menus.map((item, index) => {

                                    if (item.isDropdown) {
                                        return <DropdownMenu item={item} key={index} />
                                    }
                                    item['color'] = "white";
                                    return <Menu item={item} key={index} />
                                })
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
    return design;
}

export default Header;