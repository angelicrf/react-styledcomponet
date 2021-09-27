import styled from "styled-components";

export const HeaderStyled = styled.div`
     color : lime;
     padding: 30px 0;
     background-color: #ebfbff;
     h2{
     color: ${({colorName}) => colorName};
     }
     &:hover {
      background-color: gray;
     }
  
`
