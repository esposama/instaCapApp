import React, { Component } from 'react';
//component you import your css from 
import './TextboxInput.css';

class TextboxInput extends Component { 
    constructor(props){ 
        super(props); 
        this.state = {value: ''}; 
    }

    //this function shows the change when a person enters in text 
    // by setting this.state.value
    handleChange = (event) => {
        event.preventDefault();
        //this sets the input box text
        this.setState({value : event.target.value}); 
    };

    //this is the submit button 
    handleSubmit = (event) => {
        event.preventDefault();
        //this submits the user name to app.js
        this.props.submitUsername(this.state.value);
    };

    render() {
        return (
            //this calls the function handleSumbit(the submit button)
            //which sends the username to app.js which uses this to set the username 
            //to whatever is in the textbox when it is submitted 
            <form onSubmit={this.handleSubmit} >

                <label>

                    <h1>Username</h1>

                    <input className="TextBox" 
                        onChange={this.handleChange} 
                        value={this.state.value} 
                        type="text" 
                    />

                    <input className="SubmitButton" 
                    value="submit"
                    type="submit"  
                    />

                </label>

            </form>
        );
    }
}

export default TextboxInput;