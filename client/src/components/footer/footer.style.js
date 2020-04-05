import styled from 'styled-components';
import { colors } from '../../styles/common.style';
import { InnerContainer, Nav } from '../../styles/common.style.component';

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
            text-align: center;
            p {
                margin-top: 1.5rem;
                color: ${colors.colorWhite};
            }
            .svg-inline--fa {
                padding: 2rem;
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
    div {
        > ul {
            padding: 2rem 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            @media screen and (max-width: 1024px) {
                padding: 5rem;
                display: block;
                text-align: center;
            }
        }
    }
`;

export const FooterNav = styled(Nav)`
    @media screen and (max-width: 1024px) {
        margin: 2rem 0;
        display: block;
        li {
            margin-top: 1rem;
            margin-left: 0;
            a {
                font-size: 3.2rem;
            }
        }
    }
`;

export const FooterSns = styled.ul`
    display: flex;
    @media screen and (max-width: 1024px) {
        justify-content: flex-end;
    }
    li {
        &:first-child {
            margin-right: 1rem;
        }
        .svg-inline--fa {
            font-size: 3rem;
        }
    }
`;