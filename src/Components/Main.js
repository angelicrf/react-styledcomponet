import React, {Component} from 'react';
import {Container} from "../StyledComponents/Container.styled";
class Main extends Component {
    render() {
        const mainStyle ={
            color : "purple"
        }
        return (
            <Container>
                    <h1 style={mainStyle}>Angelique Styled Component</h1>
            </Container>
        );
    }
}

export default Main;