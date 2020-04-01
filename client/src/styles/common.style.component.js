import styled from 'styled-components';
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