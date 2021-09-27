import React, {Component} from 'react';
import {LogoStyled, NavStyled} from "./StyledComponents/Header.styled";
import {Button} from "./StyledComponents/Button.styled";
import Flex from "./Components/Flex";

class Nav extends Component {

    render() {
        return (
            <div>
                <NavStyled>
                    <LogoStyled src="./images/imageSix.svg" alt="logo"/>
                    <Button onClick={this.clickBtn}>ClickMe</Button>
                </NavStyled>
                <Flex />
            </div>
        );
    }
    clickBtn = () => console.log("clickedBtn");
}

export default Nav;