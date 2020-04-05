import React,{ useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Logo } from '../../styles/common.style.component';
import { headerAnimation, onClickMenuAnimation, onCloseMenuAnimation } from './header.animation';
import { HeaderBar,HeaderMenu, Hamburger, LoginCartNav, CopyRight, HeaderSns } from './header.style';


const Header = () => {
    const hamburger = useRef<HTMLElement>(null);
    const menu = useRef<HTMLElement>(null);
    const [menuToggle, setMenuToggle] = useState<boolean>(true);
    let headerElements:Array<HTMLElement> = [];
    let navList:Array<HTMLElement> = [];
    let bars:Array<HTMLElement> = [];
    let history = useHistory();
    useEffect(() => {
        headerAnimation(headerElements);
    },[]);
    const changePage = (e: any, destination:string) => {
        e.preventDefault();
        setMenuToggle(true);
        onCloseMenuAnimation(menu.current, bars, navList);
        setTimeout(() => {
          history.push(destination);
        }, 950);
    };
    const onClickMenu = () => {
        setMenuToggle(!menuToggle);
        if(menuToggle) {
            onClickMenuAnimation(menu.current, bars, navList);
        } else {
            onCloseMenuAnimation(menu.current, bars, navList);
        }        
    }
    return(
        <>
        <HeaderBar ref={(e:HTMLElement) => { e !== null && headerElements.push(e) }}>
            <Hamburger className='hamburger' onClick={() => {onClickMenu()}} ref={hamburger}>
                <span ref={(e) => { e !== null && bars.push(e) }}></span>
                <span ref={(e) => { e !== null && bars.push(e) }}></span>
                <span ref={(e) => { e !== null && bars.push(e) }}></span>
            </Hamburger>
            <HeaderMenu ref={menu}>
                <menu>
                    <li>
                        <a onClick={(e) => changePage(e, `/`)} ref={(e) => { e !== null && navList.push(e) }}>Home</a>
                    </li>
                    <li>
                        <a onClick={e => changePage(e, `/about`)} ref={(e) => { e !== null && navList.push(e) }}>About</a>
                    </li>
                    <li>
                        <a onClick={e => changePage(e, `/Collection`)} ref={(e) => { e !== null && navList.push(e) }}>Collection</a>
                    </li>
                    <li>
                        <a onClick={e => changePage(e, `/blog`)} ref={(e) => { e !== null && navList.push(e) }}>Blog</a>
                    </li>
                    <li>
                        <a onClick={e => changePage(e, `/contact`)} ref={(e) => { e !== null && navList.push(e) }}>Contact</a>
                    </li>
                </menu>
            </HeaderMenu>
            <Logo><a onClick={e => changePage(e, `/works`)}><img src="/images/logo.svg" alt="Logo:Chapitredeux"/></a></Logo>
            <LoginCartNav>
                <li>
                    <a onClick={e => changePage(e, `/account`)}><FontAwesomeIcon icon={faUser} /></a>
                </li>
                <li>
                    <a onClick={e => changePage(e, `/cart`)}><FontAwesomeIcon icon={faShoppingBag} /></a>
                </li>
            </LoginCartNav>
        </HeaderBar>
        <CopyRight ref={(e:HTMLElement) => { e !== null && headerElements.push(e) }}>
            <p>© 2019 Chapitredeux All Rights Reserved.</p>
        </CopyRight>
        <HeaderSns ref={(e:HTMLElement) => { e !== null && headerElements.push(e) }}>
            <li><a href=''><FontAwesomeIcon icon={faFacebookSquare} /></a></li>
            <li><a href=''><FontAwesomeIcon icon={faInstagram} /></a></li>
        </HeaderSns>
        </>
    )
}

export default Header;