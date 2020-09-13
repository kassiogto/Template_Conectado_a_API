import styled from 'styled-components';

import { Props } from '.'

export const Menu = styled.li<Props>`
    font-size: 1.6rem;
    padding: 10px 0;
`;

export const Arrow = styled.i `

    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;


    &.right {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    }

    &.left {
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    }

    &.up {
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
    }

    &.down {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    }
`;
