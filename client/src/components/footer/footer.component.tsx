import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faShippingFast, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Logo, Nav } from '../../styles/common.style.component';
import { FooterInner, FooterTop, FooterBottom, FooterSns } from './footer.style';

const Footer = () => {
    return(
        <footer>
            <FooterTop>
                <FooterInner>
                    <ul>
                        <li>
                        <FontAwesomeIcon icon={faShoppingCart} />Safe shopping<br />Buy with confidence
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faShippingFast} />Fast shipping<br />Get your product fast
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faThumbsUp} />Satisfaction guarantee<br />Or get your money back
                        </li>
                    </ul>
                </FooterInner>
            </FooterTop>
            <FooterBottom>
                <FooterInner>
                    <ul>
                        <li>
                            <Logo><Link to='/'><img src='/images/logo.svg' alt='Logo:Chapitredeux'/></Link></Logo>
                        </li>
                        <li>
                            <Nav>
                                <li>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li>
                                    <Link to='/about'>About</Link>
                                </li>
                                <li>
                                    <Link to='/collection'>Collection</Link>
                                </li>
                                <li>
                                    <Link to='/blog'>Blog</Link>
                                </li>
                                <li>
                                    <Link to='/contact'>Contact</Link>
                                </li>
                            </Nav>
                        </li>
                        <li>
                            <FooterSns>
                                <li><a href=''><FontAwesomeIcon icon={faFacebookSquare} /></a></li>
                                <li><a href=''><FontAwesomeIcon icon={faInstagram} /></a></li>
                            </FooterSns>
                        </li>
                    </ul>
                </FooterInner>
            </FooterBottom>
        </footer>
    );
}

export default Footer;