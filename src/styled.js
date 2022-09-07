
import styled from "styled-components";

export const Panell = styled.div`
  width: 300px;
  height: 100px;
  border: solid 3px blue;
  border-radius: 10px;
  text-align: center;
  display: ${({ isShowed }) => (isShowed ? "block" : "none")};
  
  input {
    margin: 3px 0 3px 0;
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
`;
