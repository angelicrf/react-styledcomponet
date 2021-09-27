import styled from "styled-components";

export const HeaderStyled = styled.div`
     color : lime;
     background-color: ${({theme}) =>  theme.colors.header};
     h2{
       color: ${({colorName}) => colorName};
     }
     &:hover {
       background-color: gray;
     } 
`
export const NavStyled = styled.nav`
  display: flex;
  align-item: center;
  justify-content: space-between;
  margin: 20px;
`
export const LogoStyled = styled.img`
  width: 150px;
  margin-left: 30px;
`
