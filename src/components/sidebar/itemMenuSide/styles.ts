import styled from 'styled-components';


import { Props } from '.'

export const Menu = styled.li<Props>`
    font-size: 1.4rem;
    padding: 10px 0;

    position: relative;

    transition: color .2;

    &.active a {
        color: #fff;
    }

    &::after {
        background-color: var(--bg-color-hasnotifications);
        width: auto;
        height: 16px;

        padding: 0 7px;

        position: absolute;
        right: 40px;
        top: 14px;
        
        border-radius: 3px;

        font-size: 11px;
        color: #fff;

        content: '${(props) => props.hasNotifications && props.hasNotifications}';
        display: ${props => props.hasNotifications && props.hasNotifications > 0 ? 'inline' : 'none'}
    }
`;
