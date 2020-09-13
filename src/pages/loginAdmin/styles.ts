import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  width: 400px;
  height: 300px;
  background-color: #fff;
  border: 1px solid #f8f3fa;
  border-radius: 8px;
  box-shadow: 0 0 35px 0 rgba(154,161,171,.15);

  h3 {
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: 600;
  }

  .label input {
    width: 80%;
    height: 38px;
    margin: 10px;
    padding-left: 10px;
    padding-right: 20px;
    border: solid 1px #eaecf2;
    background-color: #f1f3fa;
    color: #62686e;
    box-shadow: none;
    
    }

    .label label{
        margin: 10px 0; 
        font-size: 16px;
        font-weight: bolder;
    }

    .button button {
        padding: 5px;
        width: 80%;
        height: 38px;
        color: #fff;
        margin-top: 10px;
        background-color: #727cf5;
        border: 1px solid transparent;
        border-radius: 2px;
        font-size: 17px;
        -webkit-transition: all .4s;
        transition: all .4s;
    }

    .button p {
        display: flex;
        float: right;
        margin: 15px 40px;
        font-size: 12px;
        color: #62686e;
    }

    button:hover {
        background-color: #6570ee;
    }

    p:hover {
        color: #db0f0fd1;
        cursor: pointer;    
    }
`;

