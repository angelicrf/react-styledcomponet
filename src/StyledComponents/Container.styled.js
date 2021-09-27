import styled from "styled-components";

export const Container = styled.div`
     margin: 0 auto;
     padding : 0 30px;
     width : 1000px;
     max-width: 100%;
     text-align: center;
     h1 {
        color : ${({theme}) =>  theme.colors.body};
     }
`
export const HeaderContainer = styled.div`
     margin: 0 auto;
     padding : 30px 0;
     width : 1000px;
     max-width: 100%;
     text-align: center;
`
