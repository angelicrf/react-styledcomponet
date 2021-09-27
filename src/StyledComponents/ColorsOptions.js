import {createGlobalStyle} from "styled-components";

export const ColorsOptions = createGlobalStyle`
    body{
       background: ${(props) => props.theme.valueOf().colors.body};
       }
`