import React, { useRef, useEffect, FC } from 'react';
import { LinkButton } from '../../styles/common.style.component';
import { MainVisual, AboutTextBox, LinksContant, DesignerSection,DesignerInnerContainer, DesignerTitleSquare, ShopSection, ShopList} from './homepage.style';
import { mainVisualAnimation, designerSectionAnimation, designerAnimation, shopListAnimation} from './homepage.animation';
const Home: React.FC = () => {
    const mainImg = useRef<HTMLParagraphElement>(null);
    const mainSection = useRef<HTMLElement>(null);
    const aboutTextBox = useRef<HTMLElement>(null);
    const designerInnerContainer = useRef<HTMLAreaElement>(null);
    const shopList:Array<HTMLElement> = [];
    useEffect(() => {
        mainVisualAnimation(mainSection.current);
        srollAnimation();
    },[]);
    const srollAnimation = () => {
        designerSectionAnimation(aboutTextBox.current);
        designerAnimation(designerInnerContainer.current);
        shopListAnimation(shopList);
    }
    return (
        <>
        <MainVisual ref={mainSection}>
            <div>
                <h1>Jewelry that spells out the drama</h1>
            </div>
        </MainVisual>
        <DesignerSection>
            <AboutTextBox ref={aboutTextBox}>
                <h2>About Chapitredeux</h2>
                <p>texttexttexttexttexttext
texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext</p>
            </AboutTextBox>
            <DesignerInnerContainer ref={designerInnerContainer}>
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
                    <ul ref={e => {shopList.push(e)}}>
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
                    <ul ref={e => {shopList.push(e)}}>
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
                    <ul ref={e => {shopList.push(e)}}>
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