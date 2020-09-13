import styled from 'styled-components';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import StoreOutlinedIcon from '@material-ui/icons/StoreOutlined';
import CategoryOutlinedIcon from '@material-ui/icons/CategoryOutlined';
// ESTILOS SIDEBAR

// SB = SideBar
// NB = NavBar
// CO = Contanter

export const Container = styled.div`
    grid-area: SB;

    display: flex;
    flex-direction: column;
    
    width: 260px;
    height: 100vh;
    
    background-color: var(--bg-color-sidebar);
    color: var(--color-menu-sidebar);


`;

export const Logo = styled.div`
    padding: 20px;
    text-align: center;
    align-items: center;

`;

export const MenuSideBar = styled.div`
    padding: 15px 0 0 30px;

    

    ul li a {
        text-decoration: none;
        color: var(--color-menu-sidebar);

        transition: all .4s;
        
    }
    ul li a:hover {
        color: var(--color-menu-sidebar-hover);
    }

    ul li svg {
        color: var(--color-menu-sidebar);

        width: 20px;
        margin-right: 12px;
        margin-top: -3px;
    }
`;

export const Titulo = styled.li`
    text-transform: uppercase;
    letter-spacing: .05em;

    font-size: 1.1rem;
    font-weight: 700;

    margin-bottom: 12px;

`;

export const HomeIcon = styled(HomeOutlinedIcon)``;
export const StoreIcon = styled(StoreOutlinedIcon)``;
export const CategoriaIcon = styled(CategoryOutlinedIcon)``;
