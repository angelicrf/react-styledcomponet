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
   @media(max-width: ${({theme}) => theme.devices.mobile}){
      flex-direction: column;
  }
`
export const LogoStyled = styled.img`
  width: 110px;
  @media(max-width: ${({theme}) => theme.devices.mobile}){
       margin-bottom: 15px;
  }
`
export const ImageStyle =  styled.img`
   width: 300px;
   height: 250px;
   margin-left: 30px;
    @media(max-width: ${({theme}) => theme.devices.mobile}){
       margin-top: 15px;
  }
   `