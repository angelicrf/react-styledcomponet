import React, {Component} from 'react';
import {HeaderStyled} from "../StyledComponents/Header.styled";
class Heather extends Component {
    render() {
        const heather_style = {
            height: "200px",
            textAlign : "center"
        }
        return (
            <HeaderStyled colorName="blue">
             <p style={heather_style}>Start Heather</p>
                <h2>from header</h2>
            </HeaderStyled>

        );
    }
}
export default Heather;