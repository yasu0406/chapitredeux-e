import styled from 'styled-components';
import { colors } from '../../styles/common.style';
import { InnerContainer } from '../../styles/common.style.component';

export const InnerCollection = styled(InnerContainer)`
    display: flex;
    justify-content: space-around;
    @media screen and (max-width: 1024px) {
        width: calc(100% - 10rem);
    }
    @media screen and (max-width: 768px) {
        flex-direction: column-reverse;
    }
`;

export const CollectionGrid = styled.ul`
    max-width: 90rem;
    display: grid;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    grid-template-rows: auto auto auto;
    grid-template-columns: 1fr 1fr 1fr;
    margin-right: 2rem;
    @media screen and (max-width: 768px) {
        margin-right: 0;
    }
    li {
        opacity: 0;
    }
`;

export const Categories = styled.ul`
    @media screen and (max-width: 768px) {
        margin-bottom: 2rem;
        display: flex;
        justify-content: space-around;
    }
    li {
        margin-top: 1.5rem;
        &:first-child {
            margin-top: 0;
        }
        @media screen and (max-width: 768px) {
            margin-top: 0;
            margin-right: 1.5rem;
        }
        a {
            font-size: 2.6rem;
            color: ${colors.colorGold};
        }
    }
`;