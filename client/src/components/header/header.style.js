import styled from 'styled-components';
import { colors } from '../../styles/common.style';
import { Nav } from '../../styles/common.style.component';

export const HeaderBar = styled.header`
    width: calc(100% - 4rem);
    margin: auto;
    padding: 2rem 2rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.colorWhite};
    z-index: 100;
    opacity: 0;
`;

export const HeaderMenu = styled.nav`
    width:0;
    height:100vh;
    position:fixed;
    top: 0;
    left: 0;
    background-color:${colors.colorBlue};
    overflow-y:scroll;
    padding-bottom:30px;
    display: flex;
    align-items: center;
    menu {
        margin:60px auto;
        position:relative;
        text-align:center;
        li {
            margin-top: 2rem;
            overflow: hidden;
            &:first-child {
                margin-top: 2rem;
            }
        }
        a {
            padding-bottom: 1rem;
            transform: translateY(100%);
            display: block;
            color: ${colors.colorWhite};
            font-size: 5rem;
            position: relative;
            &:before {
                content: '';
                width: 0;
                height: 2px;
                position: absolute;
                left: 0;
                bottom: 0;
                background-color: ${colors.colorWhite};
                transition:0.6s;
            }
            &:hover:before {
                width: 100%;
            }
        }
    }
`;

export const Hamburger = styled.div`
    width:4.5rem;
    height:5.0rem;
    position: absolute;
    top:2rem;
    left: 2rem;
    z-index:10;
    transition:0.3s;
    cursor: pointer;
    &:hover {
        width:5.5rem;
    }
    @media screen and (max-width: 1024px) {
        width:7.5rem;
        top: 3rem;
    }
    @media screen and (max-width: 468px) {
        width: 10rem;
        top: 2rem;
    }
    span {
        width:100%;
        height:3px;
        margin: 10px 0;
        background-color:${colors.colorBlue};
        display:block;
    }
    span:nth-child(2) {
        width:70%;
    }
    span: last-child {
        width:50%;
    }
`;

export const LoginCartNav = styled(Nav)`
    position: absolute;
    right: 2rem;
    a {
        font-size: 1.8rem;
        @media screen and (max-width: 1024px) {
            font-size: 3.6rem;
        }
    }
`;

export const CopyRight = styled.div`
    position: fixed;
    top: 0px;
    left: 1.08%;
    bottom: 0;
    writing-mode: vertical-rl;
    text-align: center;
    opacity: 0;
    z-index: 100;
    p {
        font-size: 1rem;
    }
`;
export const HeaderSns = styled.ul`
    height: fit-content;
    margin: auto;
    position: fixed;
    top: 0;
    right: 1.2rem;
    bottom: 0;
    opacity: 0;
    z-index: 100;
    li {
        &:first-child {
            margin-bottom: 1rem;
        }
        a {
            font-size: 2.6rem;
        }
    }
`;