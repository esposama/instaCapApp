import React, { Component } from 'react';
//component you import your css from 
import CaptionBox from './CaptionBox/CaptionBox';
import Captions, { getMultipleCaptions, generateFakeCaptions } from '.././../api/Captions'; 


const numCaptions = 5;

class CaptionList extends Component{ 
    

    constructor(props) {
        super(props);

        this.state = {
            captions: [],
            numCaptions: 25
        };

        if (this.props.username) {
            getMultipleCaptions(this.props.username, this.state.numCaptions).then((apiCaptions) => {
                this.setState({ captions: generateFakeCaptions(apiCaptions) });
            });
        }
        
    }

    componentWillReceiveProps(p) {
        if (p.username) {
            getMultipleCaptions(p.username, this.state.numCaptions).then((apiCaptions) => {
                this.setState({ captions: generateFakeCaptions(apiCaptions) });
            });
        }
    }


    render() {
        const captionBoxes = [];

        if (this.state.captions.length > 0) {
            for (let i = 0; i < this.state.numCaptions; i++) {
                console.log(this.state.captions[i]); 
                captionBoxes.push(<CaptionBox caption={this.state.captions[i]} />);
            }
        }

        return (
            <div className="CaptionList">
                <h1>Captions</h1>  

                {captionBoxes || ''}
            </div>
        );
    }
}

export default CaptionList;