import styled from 'styled-components';

import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';

export const NavColection = styled.div`
    min-width: auto;
    width: 1261px;
    height: 170px;
    padding: 48px 48px;
    background-image: linear-gradient(257deg,#ebdce1,#aae0eb 71%,#ece1d8);

    .navgation-list {
        display: flex;
        font-size: 14px;
        color: #6c757d;
    }
    .navgation-list li {
        margin-right: 15px;
    }

    .div-action { 
        display: flex;
    }

    .margin-delete {
        margin: 0px 7px;
        
    }
    

    svg {
        font-size: 28px;
    }

    div input {
        min-width: auto;
        width: 626px;
        border: none;
        background-color: transparent;
        color: #545b62;
        font-size: xx-large;
        font-weight: 400;
        margin-right: 250px;
    }

    div button {
        height: 38px;
        margin: 0 0 0 15px;
        padding: 0 24px;
        border-radius: 999px;
        border: 1px solid #6c757d;
        line-height: 36px;
        cursor: pointer;
        -webkit-font-smoothing: antialiased;
    }

    #cancel {
        background-color: transparent;
        color: #495057;
    }

    #save {
        background-color: #fff;
        color: #3899ec;
    }

    #save a {
        text-decoration:none;
        color: #3899ec;
    }

    #cancel:hover, #save:hover {
        background-color: #eaf5fc;
        color: #3899ec;
    }
    div input:hover {
        border-bottom: 1px solid #fff;
    }
    svg:hover{
        color: #3899ec;
    }

`;
export const DropDelete = styled.ul`
    position: absolute;
    padding: 5px 0px 5px 0px;
    top: 188px;
    width: 148px;
    left: auto;
    font-size: 12px;
    transform: translate3d(825px, -8px, 0px);
    border-radius: 8px;
    color: #6c757d;
    background-color: #fff;
    box-shadow: 0 0 35px 0 rgba(154,161,171,.15);
    cursor: pointer;
    overflow: hidden;


    li {
        margin: 2px 0 3px 25px;
    }

    li:hover {
        color: #ee5951;
    }
`;

export const ContainerProduct = styled.div`
    display: flex;
    align-items: stretch;

`;

export const ProductContent = styled.div`
    padding: 5px 0px 5px 0px;
    top: 167px;
    width: 600px;
    height: 400px;
    left: auto;
    text-align: center;
    transform: translate3d(45px, 35px, 0px);
    border-radius: 8px;
    color: #6c757d;
    background-color: #fff;
    box-shadow: 0 0 35px 0 rgba(154,161,171,.15);

    h3 {
        margin: 25px;
        font-size: 16px;
        color: black;
        font-weight: 600;
    }

    p {
        font-size: 16px;
        color: #162d3d;
    }
    
    span {
        font-size: 13px;
    }

    button {
        height: 38px;
        margin: 25px 0 0 0;
        padding: 0 24px;
        border-radius: 999px;
        border: none;
        background-color: #2b81cb;
        color: #fff; 
        line-height: 36px;
        cursor: pointer;
        -webkit-font-smoothing: antialiased;
    }

    button:hover {
        background-color: #4eb7f5;
    }
`;


export const InfoCategory = styled.div`
    top: 167px;
    width: 400px;
    height: 400px;
    left: auto;
    text-align: initial;
    transform: translate3d(225px, 35px, 0px);
    border-radius: 8px;
    color: #6c757d;
    background-color: #fff;
    box-shadow: 0 0 35px 0 rgba(154,161,171,.15);

    h3 {
        margin: 25px;
        font-size: 16px;
        color: black;
        font-weight: 600;
    }

    label {
        margin: 20px 0 10px 35px;
        color: #20455e;
    }

    input {
        line-height: 19px;
        box-sizing: border-box;
        width: 325px;
        padding: 8px 10px;
        margin: 0 30px;
        border-radius: 6px;
        border: 1px solid #c1e4fe;
        background: transparent;
        outline: none;
        font-size: 16px;
        height: 36px;
    }

    button {
        height: 38px;
        margin: 0 0 0 110px;
        border: none;
        background-color: transparent;
        color: #2b81cb; 
        line-height: 36px;
        cursor: pointer;
        -webkit-font-smoothing: antialiased;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100px;
        margin: 0 30px;
        border: 1px solid #4eb7f5;
        cursor: pointer;
    }

    Svg {
        font-size: 45px;
        color: #4eb7f5;
    }
`;


export const ButtonDelete = styled(DeleteOutlinedIcon)`
    cursor: pointer;
`;

export const MediaButton = styled(AddOutlinedIcon)`
    cursor: pointer;
`;
