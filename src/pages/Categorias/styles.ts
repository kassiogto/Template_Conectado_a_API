import styled from 'styled-components';

import SearchIcon from '@material-ui/icons/Search';
import DeleteIcon from '@material-ui/icons/Delete';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import NavigateBeforeOutlinedIcon from '@material-ui/icons/NavigateBeforeOutlined';
import NavigateNextOutlinedIcon from '@material-ui/icons/NavigateNextOutlined';

export const Headers = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;


  .div-right {
    margin-left: 300px;
    width: 100%;
  }

  h3 {
    left: 0;
    font-size: 30px;
    font-weight: 600;
  }

  input {
    height: 38px;
    padding: 0 20px 0 35px;
    margin-left: 15px;
    border: none;
    border-radius: 999px;
    cursor: text;
    -webkit-font-smoothing: antialiased;
    overflow: hidden;
  }

  svg {
      font-size: 32px;
  }

  .new-category {
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

  .new-category a {
    text-decoration: none;
    color: #fff;
  }
  svg:hover { 
    background-color: #3899ec;
    color: #fff;
  }

  .new-category:hover {
      background-color: #4eb7f5;
  }
`;

export const Content = styled.div`
  padding: 20px 30px 10px 30px;
  border-radius: 8px;
  background-color: #fff;

  table {
    width: 100%;
  }
  
  svg {
      font-size: 20px;
      margin-left: 5px;
  }

  table td {
    padding: 15px;
    vertical-align: top;
    border-top: 1px solid #eef2f7;
  }

  thead {
    text-align: center;
    background-color: #f1f3fa;
    border-color: #eef2f7;
  }

  tbody {
    text-align: center;
  }

  table tbody tr:hover {
    background-color: #f1f3fa;
    border-color: #eef2f7;
    cursor: pointer;
  }
`;

export const Footer = styled.div` 
  display: flex;
  text-align: center;
  justify-content: space-between;
  padding: 10px 31px 10px 31px;
  background-color: #fff;

  svg { 
      font-size: 20px;
  }

  p {
    font-weight: 600;
  }
  ul {
    display: flex;
    text-align: center;
  }

  li {
    width: 30px;
    height: 30px;
    padding-top: 3px;
    margin: 0 3px;
    }
  li:hover, .select{
    border-radius: 20%;
    background-color: #727cf5;
    cursor: pointer;
  }
`;

export const Container1 = styled.div`   
  height: 100%;

  margin: 40px;
`;

export const IconSearch = styled(SearchIcon)`
  z-index: 9;
  top: 114px;
  right: 480px;
  padding: 3px;
  border: 1px solid #fff; 
  border-radius: 999px;
  background-color: #fff;
  color: #007bff;
`;

export const IconDelete = styled(DeleteIcon)`
  color: #98a6ad;
  cursor: pointer;
  :hover {
    color: #6c757d;
  }
`;
export const  IconEdit = styled(EditOutlinedIcon)`
  color: #98a6ad;
  cursor: pointer;
  :hover {
    color: #6c757d;
  }
`;

export const IconPrev = styled(NavigateBeforeOutlinedIcon)`

`;

export const IconNext = styled(NavigateNextOutlinedIcon)`

`;