import styled from "styled-components";

export const CardStyled = styled.div`
   display: flex;
   align-item: center;
   background-color: white;
   border-radius: 18px;
   box-shadow: 0 0 12px purple;
   margin: 40px 0;
   padding: 50px;
   flex-direction: ${({chngDir}) => chngDir || "row"};
   
   img{
     width: 75%;
   }
   & > div{
     flex: 1;
   }
   @media(max-width: ${({theme}) => theme.devices.mobile}){
      flex-direction: column;
   }
`