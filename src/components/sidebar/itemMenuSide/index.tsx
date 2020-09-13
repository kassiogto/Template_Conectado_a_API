import React from 'react';

import { Menu } from './styles'

export interface Props {
    selected?: boolean;
    hasNotifications?: number;
    
}

const ItemMenuSide: React.FC<Props> = (props) => {
    return(
          
        <Menu 
            hasNotifications={props.hasNotifications}
            className={ props.selected ? 'active' : ''}
        >
            {props.children}
        </Menu>
    )
}

export default ItemMenuSide;