import React from 'react';

import { Menu } from './styles'

export interface Props {
    selected?: boolean;
    hasNotifications?: boolean;
    mentions?: number;
}

const MenuDropSide: React.FC<Props> = (props) => {
    return(
          
        <Menu 
            mentions={props.mentions}
            className={ props.selected ? 'active' : ''}
        >
            {props.children}
        </Menu>
    )
}

export default MenuDropSide;