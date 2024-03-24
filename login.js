import React, { Component } from 'react';

class Loginpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    //   name: '',
      email: '',
      password: '',
    //   confirmPassword: '',
      formSubmitted: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();

    // Send a signup request to the server
    // with the user's name, email, and password

    this.setState({
      formSubmitted: true,
    });
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleFormSubmit}>
          {/* <label>
            Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
          </label> */}
          {/* <br /> */}
          <label>
            Email:
            <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
          </label>
          <br />
          {/* <label>
            Confirm Password:
            <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleInputChange} />
          </label> */}
          {/* <br /> */}
          <button type="submit" disabled={this.state.formSubmitted}>Login</button>
        </form>
      </div>
    );
  }
}

export default Loginpage;