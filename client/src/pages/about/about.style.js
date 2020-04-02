import styled from 'styled-components';
import { colors } from '../../styles/common.styles';

export const StorySection = styled.section`
    background-color: ${colors.colorWhite}; 
`;

export const StoryListContainer = styled.ul`
    > li {
        margin-bottom: 10rem;
        padding-bottom: 10rem;
        border-bottom: 1px solid ${colors.colorGray};
    }
`;

export const StoryListEven = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    li:first-child {
        max-width: 60rem;
    }
`;

export const StoryListOdd = styled.ul`
    display: flex;
    justify-content: space-between;
    li:first-child {
        max-width: 60rem;
    }
`;