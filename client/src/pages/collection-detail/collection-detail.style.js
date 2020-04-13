import styled from 'styled-components';
import { colors } from '../../styles/common.style';
import { MainVisual } from '../../styles/common.style.component';

export const DetailMain = styled.div`
    div {
        ul {
            display: flex;
            li:first-child {
                max-width: 70rem;
                max-height: 50rem;
                width: 100%;
                overflow: hidden;
            }
            li:last-child {
                max-width: 40rem;
                width: 100%;
                padding-left: 2rem;
                h1 {
                    margin-bottom: 1rem;
                }
                p {
                    font-size: 2.6rem;
                }
                dt {
                    font-size: 2rem;
                }
            }
        }
    }
`;