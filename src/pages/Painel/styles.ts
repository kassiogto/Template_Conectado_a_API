import styled from 'styled-components';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
// ESTILOS PAINEL

// SB = SideBar
// NB = NavBar
// CO = Contanter

export const Grid = styled.div`
    display: grid;

    grid-template-columns: 260px auto;
    grid-template-rows: 70px auto;

    grid-template-areas: 
        'SB NB'
        'SB CO'
    ;

    width: 100vw;
    height: 100vh;
    
`;

export const Container = styled.div`
    grid-area: CO;
    
    overflow-x: hidden;

    
    background-color: var(--color-background);
`;

export const ContentCategory = styled.div`
    height: 200px;
    margin: 40px 100px 40px 100px ;
    padding: 25px 25px 25px 25px;
    background-color: #fff;
    border-radius: 8px;

    #title h3 {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
    }
    #content {
        display: flex;
        justify-content: space-between;
        margin: 0 20px;
    }

    span {
        font-size: 15px;
    }
`;
export const Category = styled.div`
    padding: 20px 20px 20px 20px;
    background-color: #f1f3fa;
    border-radius: 8px;
    cursor: pointer;
    transition: all .5s;
    strong {
        margin-right: 15px;
    }

    :hover {
        background-color: #e5e7ee;
    }
`;

export const ContentRow = styled.div`
    display: flex;
    height: 300px;
    margin: 40px 100px 40px 100px;
`;
export const ContentAddCateg = styled.div`
    text-align: center;
    width: 50%;
    height: 250px;
    padding: 25px 25px 25px 25px;
    background-color: #fff;
    border-radius: 8px;
    margin-right: 100px;

    h3 {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 20px;
    }
    p {
        font-size: 16px;
        color: #162d3d;
        margin-bottom: 40px;
    }

    button {
        height: 38px;
        padding: 0 24px;
        margin-left: 15px;
        border: none;
        border-radius: 999px;
        background-color: #3899ec;
        color: #fff;
        cursor: pointer;
        -webkit-font-smoothing: antialiased;
    }

    button:hover {
        background-color: #44a3f4;
    }
`;
export const ContentHelp = styled.div`
    text-align: center;
    width: 40%;
    height: 250px;
    padding: 25px 0;
    background-color: #fff;
    border-radius: 8px;

    h3 {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 20px;
    }
    input {
        height: 38px;
        padding-left: 40px;
        padding-right: 20px;
        margin: 20px 0;
        border: none;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        background-color: #f1f3fa;
        color: #6c757d;
        box-shadow: none;
    }
    
    p {
        font-size: 12px;
        margin: 0 140px;
        line-height: 1.6;
    }

    svg {
        position: relative; 
        font-size: 20px;
        top: -2px;
        left: 33px;
        transition: 180ms ease-in-out;
    }
`;

export const IconSearch = styled(SearchOutlinedIcon)`
    color: #6c757d;

`;




