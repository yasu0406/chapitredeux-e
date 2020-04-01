import styled from 'styled-components';
import { colors } from '../../styles/common.style';
import { InnerContainer } from '../../styles/common.style.component';

export const FooterInner = styled(InnerContainer)`
    padding:0;
`;

export const FooterTop = styled.div`
    background-color: ${colors.colorBlue};
    ul {
        padding: 5rem 0;
        display: flex;
        justify-content: space-around;
        li {
            position: relative;
            color: ${colors.colorWhite};
            .svg-inline--fa {
                margin: auto;
                padding: 2rem;
                position: absolute;
                top: -1px;
                left: -9rem;
                bottom: 0;
                font-size: 3rem;
                background-color: ${colors.colorWhite};
                border-radius: 100%;
                path {
                    color:${colors.colorBlue};
                }
            }
        }
    }
`;

export const FooterBottom = styled.div`
    ul {
        padding: 2rem 0;
        display: flex;
        justify-content: space-between;
    }
`;

export const FooterSns = styled.ul`
    li {
        &:first-child {
            margin-right: 1rem;
        }
        .svg-inline--fa {
            font-size: 3rem;
        }
    }
`;