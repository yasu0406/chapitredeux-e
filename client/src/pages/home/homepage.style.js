import styled from 'styled-components';
import { colors } from '../../styles/common.style';
import { ContainerSection, SquareTitleBox, InnerContainer } from '../../styles/common.style.component';

export const MainVisual = styled(ContainerSection)`
    margin: 8rem 5rem 0;
    padding: 0;
    div {
        height: 65rem;
        background: url(../images/main-home-img.jpg) 50% 50% no-repeat;
        background-size: cover;
    }
    h1 {
        height: fit-content;
        margin: auto;
        text-align: center;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        color: white;
        font-size: 9rem;
    }
`;

export const AboutTextBox = styled.div`
    max-width: 70rem;
    width: 100%;
    margin: auto;
    text-align: center;
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
    position: relative;
`;

export const DesignerTitleSquare = styled(SquareTitleBox)`
    left: -23rem;
    right: unset;
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
            }
        }
        &:nth-child(even) {
            ul {
                flex-direction: row-reverse;
            }
        }
    }
`;