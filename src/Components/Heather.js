import React, {Component} from 'react';
class Heather extends Component {
    render() {
        const heather_style = {
            color: "blue",
            height: "200px",
            textAlign : "center"
        }
        return (
            <div>
             <p style={heather_style}>Start Heather</p>
            </div>
        );
    }
}
export default Heather;