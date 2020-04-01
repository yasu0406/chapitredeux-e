import React, { useRef, BlockquoteHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

import { InnerContainer, LinkButton } from '../../styles/common.style.component';
import { MainVisual, AboutTextBox, LinksContant, DesignerSection,DesignerInnerContainer, DesignerTitleSquare, ShopSection, ShopList} from './homepage.style';

const Home = () => {
    const mainImg = useRef<HTMLParagraphElement>(null);
    return (
        <>
        <MainVisual>
            <div>
                <h1>Jewelry that spells out the drama</h1>
            </div>
        </MainVisual>
        <section>
            
        </section>
        <DesignerSection>
            <AboutTextBox>
                <h2>About Chapitredeux</h2>
                <p>texttexttexttexttexttext
texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext</p>
            </AboutTextBox>
            <DesignerInnerContainer>
                <p ref={mainImg}><img src="/images/aboutme-img.jpg" alt="TODO:change"/></p>
                <DesignerTitleSquare>
                    <li><h2>ABOUT ME</h2></li>
                    <li><p>I’m a trendy jewelry designer</p></li>
                    <li><LinkButton to="">Learn more</LinkButton></li>
                </DesignerTitleSquare>
            </DesignerInnerContainer>
        </DesignerSection>
        <ShopSection>
            <ShopList>
                <li>
                    <ul>
                        <li>
                            <h2>Title</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto eius, quaerat fugit ad aperiam, natus blanditiis nemo dolores ex corporis dolorum aut ipsum nostrum quae ab soluta rerum ut sed!</p>
                            <LinkButton to="">SHOP</LinkButton>
                        </li>
                        <li>
                            <img src="/images/shop-engage-img.jpg" alt=""/>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li>
                            <h2>Title</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto eius, quaerat fugit ad aperiam, natus blanditiis nemo dolores ex corporis dolorum aut ipsum nostrum quae ab soluta rerum ut sed!</p>
                            <LinkButton to="">SHOP</LinkButton>
                        </li>
                        <li>
                            <img src="/images/shop-engage-img.jpg" alt=""/>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li>
                            <h2>Title</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto eius, quaerat fugit ad aperiam, natus blanditiis nemo dolores ex corporis dolorum aut ipsum nostrum quae ab soluta rerum ut sed!</p>
                            <LinkButton to="">SHOP</LinkButton>
                        </li>
                        <li>
                            <img src="/images/shop-engage-img.jpg" alt=""/>
                        </li>
                    </ul>
                </li>
            </ShopList>
        </ShopSection>
        </>
    )
}

export default Home;