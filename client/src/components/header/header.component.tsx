import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Logo, Nav } from '../../styles/common.style.component';
import { HeaderBar, CopyRight, HeaderSns } from './header.style';

const Header = () => {
    return(
        <>
        <HeaderBar>
            <Logo><Link to='/'><img src="/images/logo.svg" alt="Logo:Chapitredeux"/></Link></Logo>
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
        </HeaderBar>
        <CopyRight>
            <p>© 2019 Chapitredeux All Rights Reserved.</p>
        </CopyRight>
        <HeaderSns>
            <li><a href=''><FontAwesomeIcon icon={faFacebookSquare} /></a></li>
            <li><a href=''><FontAwesomeIcon icon={faInstagram} /></a></li>
        </HeaderSns>
        </>
    )
}

export default Header;