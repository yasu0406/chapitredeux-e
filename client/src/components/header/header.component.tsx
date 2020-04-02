import React,{ useRef, useState } from 'react';
import { TweenLite, Expo } from 'gsap';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Logo } from '../../styles/common.style.component';
import { HeaderBar,HeaderMenu, Hamburger, LoginCartNav, CopyRight, HeaderSns } from './header.style';
import { colors } from '../../styles/common.style';

const Header = () => {
    const hamburger = useRef(null);
    const menu = useRef(null);
    const logo = useRef(null);
    const [menuToggle, setMenuToggle] = useState<boolean | null>(true);
    let navList:Array<Element> = [];
    let bars:Array<Element> = [];
    let history = useHistory();
    const changePage = (e: any, destination:string) => {
        e.preventDefault();
        onCloseMenu();
        setTimeout(() => {
          history.push(destination);
        }, 950);
    };
    const onClickMenu = () => {
        setMenuToggle(!menuToggle);
        if(menuToggle === true) {
            TweenLite.to(menu.current, 1, {
                width: '100%',
                ease: Expo.easeInOut
            });
            TweenLite.to(bars[0], 0.5, {
                transform: 'rotate(48deg) translateY(7px) translateX(9px)',
                backgroundColor:'white'
            });
            TweenLite.to(bars[1], 0.5, {
                width: '100%',
                transform: 'rotate(-48deg)',
                backgroundColor:'white'
            });
            TweenLite.to(bars[2], 0.5, {
                opacity: 0
            });
            TweenLite.to(navList[0], 0.5, {
                delay: 1,
                transform: 'translateY(0)',
            });
            TweenLite.to(navList[1], 0.5, {
                delay: 1.3,
                transform: 'translateY(0)'
            });
            TweenLite.to(navList[2], 0.5, {
                delay: 1.6,
                transform: 'translateY(0)'
            });
            TweenLite.to(navList[3], 0.5, {
                delay: 1.8,
                transform: 'translateY(0)'
            });
            TweenLite.to(navList[4], 0.5, {
                delay: 2,
                transform: 'translateY(0)'
            });
        } else {
            onCloseMenu();
        }        
    }
    const onCloseMenu = () => {
        setMenuToggle(true);
        TweenLite.to(navList[0], 0.5, {
            transform: 'translateY(100%)'
        });
        TweenLite.to(navList[1], 0.5, {
            delay: 0.2,
            transform: 'translateY(100%)'
        });
        TweenLite.to(navList[2], 0.5, {
            delay: 0.4,
            transform: 'translateY(100%)'
        });
        TweenLite.to(navList[3], 0.5, {
            delay: 0.6,
            transform: 'translateY(100%)'
        });
        TweenLite.to(navList[4], 0.5, {
            delay: 0.8,
            transform: 'translateY(100%)'
        });
        TweenLite.to(menu.current, 0.5, {
            delay: 1,
            width: 0,
            ease: Expo.easeInOut
        });
        TweenLite.to(bars[0], 0.5, {
            delay: 1,
            transform: 'unset',
            backgroundColor:colors.colorBlue
        });
        TweenLite.to(bars[1], 0.5, {
            delay: 1,
            width: '70%',
            transform: 'unset',
            backgroundColor:colors.colorBlue
        });
        TweenLite.to(bars[2], 0.5, {
            delay: 1,
            opacity: 1
        });
    }
    return(
        <>
        <HeaderBar>
            <Hamburger className='hamburger' onClick={() => {onClickMenu()}} ref={hamburger}>
                <span ref={(e) => { e !== null && bars.push(e) }}></span>
                <span ref={(e) => { e !== null && bars.push(e) }}></span>
                <span ref={(e) => { e !== null && bars.push(e) }}></span>
            </Hamburger>
            <HeaderMenu ref={menu}>
                <menu>
                    <li>
                        <a onClick={(e) => changePage(e, `/works`)} ref={(e) => { e !== null && navList.push(e) }}>Home</a>
                    </li>
                    <li>
                        <a onClick={e => changePage(e, `/works`)} ref={(e) => { e !== null && navList.push(e) }}>About</a>
                    </li>
                    <li>
                        <a onClick={e => changePage(e, `/works`)} ref={(e) => { e !== null && navList.push(e) }}>Collection</a>
                    </li>
                    <li>
                        <a onClick={e => changePage(e, `/works`)} ref={(e) => { e !== null && navList.push(e) }}>Blog</a>
                    </li>
                    <li>
                        <a onClick={e => changePage(e, `/works`)} ref={(e) => { e !== null && navList.push(e) }}>Contact</a>
                    </li>
                </menu>
            </HeaderMenu>
            <Logo><a onClick={e => changePage(e, `/works`)}><img src="/images/logo.svg" alt="Logo:Chapitredeux"/></a></Logo>
            <LoginCartNav>
                <li>
                    <a onClick={e => changePage(e, `/works`)}><FontAwesomeIcon icon={faFacebookSquare} /></a>
                </li>
                <li>
                    <a onClick={e => changePage(e, `/works`)}><FontAwesomeIcon icon={faFacebookSquare} /></a>
                </li>
            </LoginCartNav>
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