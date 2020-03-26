import styled from 'styled-components';
import { colors } from '../../styles/common.styles';

export const HeaderBar = styled.header`
    padding: 2rem 0;
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export const Logo = styled.h1`
    img {
        width: 20rem;
        height: auto;
    }
`;

export const Nav = styled.ul`
    display: flex;
    li {
        margin-left: 2rem;
        &:first-child {
            margin-left: 0;
        }
        a {
            font-size: 2rem;
            color: ${colors.colorGold};
        }
    }
`;