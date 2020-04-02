import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from './common.style';

export const ContainerSection = styled.section`
    margin: 0 5rem;
    padding: 10rem 0;
`;

export const InnerContainer = styled.div`
    max-width: 1088px;
    width: 100%;
    margin: auto;
    padding: 10rem 0;
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
    img {
        width: 14rem;
        height: auto;
    }
`;