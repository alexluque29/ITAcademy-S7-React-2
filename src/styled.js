
import styled from "styled-components";

export const Panell = styled.div `
    width: 300px;
    height: 100px;
    border: solid 3px blue;
    border-radius: 10px;
    text-align: center;
    display: ${({isShowed}) => isShowed ? 'block' : 'none'}    

`
;