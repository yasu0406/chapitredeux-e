import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faShippingFast, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Logo, Nav } from '../../styles/common.style.component';
import { FooterInner, FooterTop, FooterBottom, FooterSns, FooterNav } from './footer.style';

const Footer = () => {
    return(
        <footer>
            <FooterTop>
                <FooterInner>
                    <ul>
                        <li>
                        <FontAwesomeIcon icon={faShoppingCart} /><p>Safe shopping<br />Buy with confidence</p>
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faShippingFast} /><p>Fast shipping<br />Get your product fast</p>
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faThumbsUp} /><p>Satisfaction guarantee<br />Or get your money back</p>
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
                            <FooterNav>
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
                            </FooterNav>
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