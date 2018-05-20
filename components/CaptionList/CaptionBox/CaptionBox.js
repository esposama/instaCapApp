import React, { Component } from 'react';
import './CaptionBox.css';

class CaptionBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <p className="CaptionBox">
            {this.props.caption}
        </p>
    }
}

export default CaptionBox;