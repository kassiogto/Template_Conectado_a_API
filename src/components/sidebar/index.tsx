import React from 'react';

import { 
    Container, 
    Logo, 
    MenuSideBar, 
    Titulo, 
    HomeIcon, 
    StoreIcon, 
    CategoriaIcon
} from './styles';

import ItemMenuSide from './itemMenuSide';
import { Link } from 'react-router-dom';



const SideBar: React.FC = () => {

    return(
        
        <Container>
            <Logo>Template</Logo>

            <MenuSideBar>
                <ul>
                    <Titulo>Navegação</Titulo>
                    <ItemMenuSide  hasNotifications={0} selected={true}>
                        <HomeIcon />
                     <Link to='/painel'>Pagina Inicial</Link>
                    </ItemMenuSide>

                    <ItemMenuSide hasNotifications={37} >
                        <StoreIcon />
                        <Link to='/'>Loja</Link>
                    </ItemMenuSide>

                    <ItemMenuSide hasNotifications={14} >
                        <CategoriaIcon />
                        <Link to='/painel/categoria'>Categorias</Link>
                    </ItemMenuSide>

                    
                </ul>
            </MenuSideBar>
        </Container>
    )
}

export default SideBar;