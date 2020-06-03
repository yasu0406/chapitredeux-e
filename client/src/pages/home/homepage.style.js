import styled from 'styled-components';
import { colors } from '../../styles/common.style';
import { ContainerSection, SquareTitleBox, InnerContainer, MainVisual } from '../../styles/common.style.component';

export const HomeVisual = styled(MainVisual)`
    div {
        background: url(../images/main-home-img.jpg) 50% 50% no-repeat;
    }
`;

export const AboutTextBox = styled.div`
    max-width: 70rem;
    width: 100%;
    margin: auto;
    text-align: center;
    h2,p {
        opacity: 0;
        transform: translate(0px, 50px);
    }
    p {
        margin-top: 2rem; 
    }
`;

export const LinksContant = styled.ul`
    margin-top: 5rem;
    display: flex;
    justify-content: space-around;
    ul {
        li:first-child + li {
            margin: 20px 0;
        }
    }
    > li:first-child {
        margin-right: 20px;
        ul {
            li:last-child {
                margin: 20px 0 0;
            }
        }
    }
`;

export const DesignerSection = styled(ContainerSection)`
`;

export const DesignerInnerContainer = styled(InnerContainer)`
    max-width: 40rem;
    padding: 10rem 0 0;
    position: relative;
    > p {
        opacity: 0;
        transform: translate(0px, 50px);
    }
`;

export const DesignerTitleSquare = styled(SquareTitleBox)`
    left: -23rem;
    right: unset;
    opacity: 0;
    transform: translate(0px, 50px);
    @media screen and (max-width: 1024px) {
        top: 60rem;
        right: 10rem;
    }
    li:nth-child(2) {
        margin: 2rem 0 4rem;
    }
    li:last-child {
        text-align: right;
    }
    h2, p {
        color: ${colors.colorWhite};
    }
    h2 {
        font-size: 1.8rem;
    }
    p {
        font-size: 3.4rem;
    }
    a {
        color: ${colors.colorWhite};
        &:before {
            background-color: ${colors.colorWhite}!important;
        }
    }
`;

export const ShopSection = styled(ContainerSection)``;

export const ShopList = styled.ul`
    li {
        ul {
            display: flex;
            background-color: ${colors.colorBeige};
            opacity: 0;
            transform: translate(0px, 50px);
            li:first-child {
                max-width: 50rem;
                padding: 0 5rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                p {
                    margin: 2rem 0 4rem;
                }
                @media screen and (max-width:1024px) {
                    padding: 5rem;
                    max-width: unset;
                }
            }
            @media screen and (max-width:1024px) {
                flex-direction: column-reverse;
            }
        }
        &:nth-child(even) {
            ul {
                flex-direction: row-reverse;
                @media screen and (max-width:1024px) {
                    flex-direction: column-reverse;
                }
            }
        }
    }
`;