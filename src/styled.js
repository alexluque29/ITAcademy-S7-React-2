
import styled from "styled-components";

export const Panell = styled.div`
  width: 350px;
  height: 125px;
  border: solid 3px blue;
  border-radius: 10px;
  text-align: center;
  display: ${({ isShowed }) => (isShowed ? "block" : "none")};
  
  input {
    margin: 4px 4px 10px 4px;
    border-radius: 5px;
    width: 30px;
  };

  .button-sub {
    width: 22x;
    height: 22px;
    color: black;
    border-radius: 5px;
    font-weight: bold;
    transition-duration: 0.4s;
    margin: 0 4px 0 4px;
  }
  
  .button-sub:hover {
    background-color: blue;
    color: white;
    cursor: pointer;
  }
  
  .button-info{
    width: 20px;
    height: 20px;
  }
  
  .button-info:hover {
    cursor: pointer;
  }
  `;