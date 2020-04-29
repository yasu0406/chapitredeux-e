import styled from 'styled-components';
import { colors } from '../../styles/common.style';

export const DetailMain = styled.div`
    div {
        ul {
            display: flex;
            justify-content: space-between;
            li:first-child {
                max-width: 70rem;
                width: 100%;
                overflow: hidden;
                .image-gallery-thumbnails-container {
                    text-align: left;
                    cursor: unset;
                    button {
                        cursor: pointer;
                    }
                }
                .image-gallery-fullscreen-button {
                    top: 0;
                    bottom: unset;
                }
                .image-gallery-thumbnail.active, .image-gallery-thumbnail:hover, .image-gallery-thumbnail:focus {
                    border: 4px solid ${colors.colorBlue};
                }
            }
            li:last-child {
                width: 100%;
                margin-left: 6rem;
                h1 {
                    margin-bottom: 1rem;
                }
                p {
                    margin-bottom: 1rem;
                    font-size: 2.6rem;
                }
                .description {
                    font-size: 1.6rem;
                }
                dl {
                    margin-top: 2rem;
                    margin-bottom:3rem;
                }
                dt {
                    margin-bottom: 0.5rem;
                    font-size: 2rem;
                }
                dd {
                    input {
                        width: 3rem;
                        text-align: center;
                    }
                }
            }
            @media screen and (max-width: 1024px) {
                padding: 0 4rem;
                display: block;
                li:first-child {
                    max-width: unset;
                }
                li:last-child {
                    margin-left: 0;
                }
            }
        }
    }
`;