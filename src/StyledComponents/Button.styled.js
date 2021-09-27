import styled from "styled-components";

export const Button = styled.div`
   border-radius: 30px;
   border: none;
   box-shadow: 0 0 15px black;
   cursor: pointer;
   font-size: 16px;
   font-weight: 460px;
   padding: 20px 35px;
   width: 60px; 
   margin-left: 60px;
   text-align: center;
   color: ${({clr}) => clr = "red"};
   background-color : ${({hd}) => hd = "black"}
`


