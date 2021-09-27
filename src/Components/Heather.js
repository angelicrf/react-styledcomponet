import React, {Component} from 'react';
import {HeaderStyled} from "../StyledComponents/Header.styled";
import {HeaderContainer} from "../StyledComponents/Container.styled";

import Nav from "../Nav";

class Heather extends Component {
    render() {
        return (
            <HeaderStyled>
                <HeaderContainer>
                  <Nav />
                </HeaderContainer>
            </HeaderStyled>
        );

    }

}
export default Heather;