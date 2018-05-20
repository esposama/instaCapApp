import React, { Component } from 'react';
import { getLatestPost, getMultiplePosts, getLatestCaption, getMultipleCaptions } from '../../api/Captions';

import TextboxInput from '../TextboxInput/TextboxInput';
import CaptionList from '../CaptionList/CaptionList';

import Logo from '../../insta_bb.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props); 
    this.state = { username: '' }; 
  }


  //this sets the state when a username is submitted 
  submitUsername = (username) => {
    this.setState({ username: username });
  };

  //this gets the username from the textbox and gets a caption list 
  //from that particular user 
  render() {
    return (
      <div className="App">
        <TextboxInput submitUsername={this.submitUsername} />
        
        {
          // this uses the ternary operator that displays a captionList if 
          //the username is not null 
          this.state.username ? 
          <CaptionList username={this.state.username} /> :
          ''
        }

        <img className="Logo" src={Logo} />
      </div>
    );
  }
}

export default App;
