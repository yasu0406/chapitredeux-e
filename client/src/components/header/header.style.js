import styled from 'styled-components';
import { colors } from '../../styles/common.style';

export const HeaderBar = styled.header`
    width: calc(100% - 4rem);
    margin: auto;
    padding: 2rem 2rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.colorWhite};
    z-index: 100;
`;

export const CopyRight = styled.div`
    position: fixed;
    left: 1.08%;
    top: 0px;
    bottom: 0;
    writing-mode: vertical-rl;
    text-align: center;
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
    li {
        &:first-child {
            margin-bottom: 1rem;
        }
        a {
            font-size: 2.6rem;
        }
    }
`;