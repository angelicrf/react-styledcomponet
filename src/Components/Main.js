import React, {Component} from 'react';

class Main extends Component {
    render() {
        const mainStyle ={
            color : "purple"
        }
        return (
            <div className="App">
                <h1 style={mainStyle} className="container">Angelique Styled Component</h1>
            </div>
        );
    }
}

export default Main;