import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from '../../styles/common.styled.component';
import { HeaderBar, Logo, Nav } from './header.style';

const Header = () => {
    return(
        <HeaderBar>
            <Container>
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
            </Container>
        </HeaderBar>
    )
}

export default Header;