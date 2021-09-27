import React, {Component} from 'react';
import {FlexStyled} from "../StyledComponents/Flex.styled";
import {Button} from "../StyledComponents/Button.styled";
import {ImageStyle} from "../StyledComponents/Header.styled";

class Flex extends Component {
    render() {
        return (
            <FlexStyled >
            <div>
                <h1>Build the community your fans will love</h1>
                <p>here some text</p>
                <Button hd="red" clr="blue">ClickMe</Button>
            </div>
            <ImageStyle src="./images/imageFour.svg" alt='' />
            </FlexStyled>

        );
    }
}

export default Flex;