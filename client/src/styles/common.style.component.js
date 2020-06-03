import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from './common.style';

export const ContainerSection = styled.section`
    margin: 10rem 0;
    @media screen and (max-width: 1024px) {
        margin: 10rem 5rem;
        width: calc(100% - 10rem);
    }
`;

export const InnerContainer = styled.div`
    max-width: 108.8rem;
    width: 100%;
    margin: auto;
    padding: 15rem 0;
`;

export const Nav = styled.ul`
    display: flex;
    align-items: baseline;
    li {
        margin-left: 2rem;
        &:first-child {
            margin-left: 0;
        }
        a {
            color: ${colors.colorGold};
        }
    }
`;

export const MainVisual = styled.section`
    width:0;
    margin: 5rem 5rem 10rem;
    opacity: 0;
    transform: translate(0px, 50px);
    div {
        height: 65rem;
        background: url(../images/main-about-img.jpg) 50% 50% no-repeat;
        background-size: cover;
        opacity: 0.2;
        transform: scale(0.7);
        @media screen and (max-width:1024px) {
            height: 85rem;
            transform: scale(1);
        }
        @media screen and (max-width:468px) {
            height: 115rem;
        }
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
        color: ${colors.colorGold};
    }
`;

export const SquareTitleBox = styled.ul`
    max-width: 27.5rem;
    width: 100%;
    height: 25rem;
    margin: auto;
    padding: 2rem;
    position: absolute;
    top: 4.5rem;
    right: -14rem;
    bottom: 0;
    background-color: ${colors.colorGold};
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const LinkButton = styled(Link)`
    font-size: 1.6rem;
    position: relative;
    &:before {
        content: '';
        width: 100%;
        height: 2px;
        position: absolute;
        bottom: -5px;
        background-color: ${colors.colorBlue};
    }
`;

export const Logo = styled.h1`
    @media screen and (max-width: 468px) {
        margin-top: 2rem;
    }
    img {
        width: 14rem;
        height: auto;
        @media screen and (max-width: 1024px) {
            width: 20rem;
        }
        @media screen and (max-width: 468px) {
            width: 30rem;
        }
    }
`;

export const Button = styled.button`
    padding: 1rem 2rem;
    background-color: white;
    border: 2px solid ${colors.colorBlue};
    outline: unset;
    cursor: pointer;
    transition: .5s;
    &:hover {
        background: ${colors.colorBlue};
        color: white;
    }
`;