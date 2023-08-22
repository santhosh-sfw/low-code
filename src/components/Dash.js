import React, { Component } from 'react';
import './Dash.css';
import InputOptions from './inputOptions';
import GeneratedCode from './GenerateHTML';
import InputBoxRenderer from './renderInput';
import Grid from '@mui/material/Grid';

class Dash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      placeholder: '',
      name: '',
    };
  }

  handleType = (event) => {
    this.setState({
      type: event.target.value,
    });
  };

  handleName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handlePlaceholder = (event) => {
    this.setState({
      placeholder: event.target.value,
    });
  };

  generateInputCode = () => {
    return `<input type="${this.state.type}" name="${this.state.name}" placeholder="${this.state.placeholder}" />`;
  };

  render() {
    return (
      <div className='container'>
      <Grid container spacing={2}>

        <Grid item xs={4} className='column'>
          <InputOptions
            type={this.state.type}
            handleType={this.handleType}
            handleName={this.handleName}
            handlePlaceholder={this.handlePlaceholder}
          />
        </Grid>

        <Grid item xs={4} className='column'>
          <InputBoxRenderer
            type={this.state.type}
            name={this.state.name}
            placeholder={this.state.placeholder}
          />
        </Grid>

        <Grid item xs={4} className='column'>
          <GeneratedCode generateInputCode={this.generateInputCode} />
        </Grid>

      </Grid>
      </div>
    );
  }
}

export default Dash;