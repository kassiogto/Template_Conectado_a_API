import { Props } from '.';
import styled from 'styled-components';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
//Styles Navbar

export const SearchPainel = styled.div`
    display: flex;
    padding: 10px 0 10px 20px;
    position: relative;
    align-items: center;

    svg {
        font-size: 20px;
    }

    button {
        padding: 5px;
        width: 75px;
        height: 38px;

        color: #fff;
        background-color: #727cf5;

        border: 1px solid transparent;
        border-radius: 2px;

        font-size: 13px;
        transition: all .4s;
        
    }

    button:hover {
        color: #fff;
        background-color: #4e5bf2;
        border-color: #4250f2;
    }

    input { 
        height: 38px;
        padding-left: 40px;
        padding-right: 20px;

        border: none;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
    
        background-color: #f1f3fa;
        color: #6c757d;
        box-shadow: none;

    }
`;


export const Avatar = styled.div` 
    display: flex;
    flex-direction: row;
    padding: 0 20px 0px 10px; 
    min-width: 300px;
    justify-content: flex-end;
    align-items: center;
    
    svg {
        font-size: 27px;
    }

    img {
        margin: 0 15px 0 15px;
        width: 32px;
        height:32px;
        border-radius: 50%;
    }
    .usuario {
        display: flex;
        flex-direction: row;
        margin-left: 15px;
        align-items: center;
        height: 100%;
        background-color: #fafbfd;
        border: 1px solid #f1f3fa;
        transition: all .3s;
        cursor: pointer;
    }

    .user-info {
        display: flex;
        flex-direction: column; 
        min-width: 80px;
        padding-right: 12px;
        font-size: 12px;
        color: #98a6ad;
    }

    .notific-style {
        display: flex;
        align-items: center;    
        transition: all .3s;
        cursor: pointer;
    }
    .notific-style:hover {
        background-color: #e9ebf0;
        border-radius: 50%;
    }

    .usuario:hover {
        background-color: #e9ebf0;
        border-radius: 8px;
    }
`;

export const DropNotification = styled.div<Props>`
    position: absolute;
    text-align: inherit;
    padding: 5px 0px 5px 0px;
    top: 71px;
    width: 150px;
    left: auto;
    font-size: 13px;
    line-height: 2.2;
    transform: translate3d(-86px, 3px, 0px);
    border-radius: 8px;
    color: #6c757d;
    background-color: #fff;
    box-shadow: 0 0 35px 0 rgba(154,161,171,.15);
    overflow: hidden;

    hr {
        margin: 6px 0 6px 0;
    }

    li{
        padding:0 0 0 20px;
        cursor: pointer;
    }

    ul {
        margin: 0;
    }
    li:hover {
        color: black;
        background-color: #e9ebf0;
    }
`;



export const DropDownUser = styled.div<Props>`
    position: absolute;
    text-align: inherit;
    padding: 5px 0px 5px 0px;
    top: 71px;
    width: 150px;
    left: auto;
    font-size: 13px;
    line-height: 2.2;
    transform: translate3d(20px, 3px, 0px);
    border-radius: 8px;
    color: #6c757d;
    background-color: #fff;
    box-shadow: 0 0 35px 0 rgba(154,161,171,.15);
    overflow: hidden;

    hr {
        margin: 6px 0 6px 0;
    }

    li{
        padding:0 0 0 20px;
        cursor: pointer;
    }

    ul {
        margin: 0;
    }
    li:hover {
        color: black;
        background-color: #e9ebf0;
    }
`;

export const Container = styled.div`
    grid-area: NB;

    display: flex;
    justify-content: space-between;
    
    width: 100%;
    height: 70px;
    
    background-color: #fff;
`;

export const SearchIcon = styled(SearchOutlinedIcon)` 
    position: absolute;
    z-index: 9;
    top: 26px;
    left: 31px;
    color: #6c757d;
`;

export const NotificationIcon = styled(NotificationsActiveOutlinedIcon)`
    color: #6c757d;
    margin: 10px; 
`;

