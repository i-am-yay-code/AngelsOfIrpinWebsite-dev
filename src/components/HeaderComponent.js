import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink, Button
} from 'reactstrap';
import '../components/HeaderComponent.css';
import { Link } from 'react-scroll'
import ModalPay from './ModalPayment';



const Header = (args) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);



    return (
        <div className='header py-3 mb-5'>
            <Navbar expand='md'>

                <NavbarBrand className='navbar-brand' href="/">
                    <img className='logo-navbar px-3 ' src={require('../assets/logo_main_no_words.png')} width='80px' alt='Angels logo' />

                    ГО Янголи Ірпеня</NavbarBrand>
                <NavbarToggler onClick={toggle} className="md" />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink className='nav-link' href="#"><Link to="about" spy={true} smooth={false}>Про нас</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' href="/"><Link to="join" spy={true} smooth={false}>Приєднатися</Link></NavLink>
                        </NavItem>

                    </Nav>
                    <ModalPay />
                </Collapse>
            </Navbar>

        </div >
    );
}

export default Header;
