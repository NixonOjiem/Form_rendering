import React, { Component } from 'react';
import './Form.css';

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: ''
    };
    this.handleGenderChange = this.handleGenderChange.bind(this); // bind the function to the component's context
    this.handleSubmit = this.handleSubmit.bind(this)
}

  handleGenderChange(event) {
    this.setState({ gender: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    // handle form submission logic here
    alert('Form submitted successfully');
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className= "container">
            <div className='heading'><h2>Details Collection Form</h2></div>
          <label className='tags'>Full name</label>
          <input type="text" name="name" />
          <label className='tags'>Date Of Birth</label>
          <input type="date" name="dob" />
          {/* <label>Occupation</label><br />
          <input type="text" name="occupation" /><br /><br /> */}
          <label className='tags'>Gender</label>
          <label>Male</label>
          <input type="radio" name="gender" value="male" checked={this.state.gender === 'male'} onChange={this.handleGenderChange} />
          <label>Female</label>
          <input type="radio" name="gender" value="female" checked={this.state.gender === 'female'} onChange={this.handleGenderChange} />
         

          {this.state.gender === 'male' ? (
            <div>
              <br />
              <label className='tags'>Are you circumcised?</label>
              <label >Yes</label>
              <input type="radio" name="not-circumcised" />
              <label>No</label>
              <input type="radio" name="circumcised" />
              <label className='tags'>Have you been screened for prostate cancer?</label><br />
              <label>Yes</label>
              <input type="radio" name="screened" />
              <label>No</label>
              <input type="radio" name="not-screened" />
              <label className='tags'>Do you smoke</label>
              <label>Yes</label>
              <input type="radio" name="smoker" value="yes" />
              <label>No</label>
              <input type="radio" name="no-smoker" value="yes"/>
            </div>
          ) : this.state.gender === 'female' ? (
            <div>
              <br />
              <label className='tags'>Have you been screened for cervical cancer?</label>
              <label>Yes</label>
              <input type="radio" name="not-screened" />
              <label>No</label>
              <input type="radio" name="screened" />
              <label className='tags'>Have you been screened for breast cancer</label>
              <label>Yes</label>
              <input type="radio" name="breast-cancer-screened"></input>
              <label>No</label>
              <input type="radio" name="breast-cancer-not-screened"></input>
              <label className='tags'>Last L.M.P</label>
              <input type="date" name="last-lmp" />
              <label className='tags'>Do you smoke</label><br />
              <label>Yes</label>
              <input type="radio" name="smoker" value="yes" />
              <label>No</label>
              <input type="radio" name="no-smoker" value="yes"/>
            </div>
          ) : null}

          <label className='tags'>Have you been a victim of gender abuse</label>
          <label>Yes</label>
          <input type="radio" name="abuse" value="yes"></input>
          <label>No</label>
          <input type="radio" name="abuse" value="no"></input>
          <button type="submit">Submit</button><button type="reset">Reset</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Forms;