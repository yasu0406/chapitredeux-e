import styled from 'styled-components';
import { ContainerSection, InnerContainer, MainVisual } from '../../styles/common.style.component';
import { colors } from '../../styles/common.style';

export const AboutVisual = styled(MainVisual)`
    div {
        background: url(../images/main-about-img.jpg) 50% 50% no-repeat;
    }
`;

export const StorySection = styled(ContainerSection)`
    @media screen and (max-width: 1024px) {
        margin: 0 5rem;
    }
`;

export const StoryListContainer = styled(InnerContainer)`
    > ul {
        > li {
            margin-bottom: 10rem;
            padding-bottom: 10rem;
            border-bottom: 1px solid ${colors.colorGray};
            opacity: 0;
            ul {
                @media screen and (max-width: 1024px) {
                    flex-direction: column-reverse;
                }
                li {
                    @media screen and (max-width:1024px) {
                        &:first-child {
                            margin-top: 2rem;
                        }
                    }
                    p {
                        margin-top: 2rem;
                    }
                }
            }
        }
    }
`;

export const StoryListEven = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    li:first-child {
        max-width: calc(60rem - 2rem);
    }
`;

export const StoryListOdd = styled.ul`
    display: flex;
    justify-content: space-between;
    li:first-child {
        max-width: 60rem;
    }
`;