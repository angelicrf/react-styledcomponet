import React, {Component} from 'react';
import {Container} from "../StyledComponents/Container.styled";
import content from "../Content";
import Card from "./Card";

class Main extends Component {
    render() {
        return (
            <Container>
                    <h1>Angelique Styled Component</h1>
                {
                    content.map((item,index) => (
                       <Card key={index} items={item} />
                    ))
                }
            </Container>
        );
    }
}

export default Main;