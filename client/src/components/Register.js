import React from 'react';
import { AuthConsumer } from "../providers/AuthProvider";
import { Form, Header, } from 'semantic-ui-react';

class Register extends React.Component {
  state = { email: "", password: "", passwordConfirmation: "", };

  handleChange = (e, { name, value, }) => {
    this.setState({ [name]: value, });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { password, passwordConfirmation, } = this.state;
    const { auth: { handleRegister, }, history, } = this.props;
    if (password === passwordConfirmation)
      handleRegister(this.state, history);
    else
      alert("Passwords Don't Quite Match There Bud.");
  }

  render() {
    const { email, password, passwordConfirmation, } = this.state;

    return (
      <div>
        <Header as="h1" textAlign="center">Register</Header>
        <Form onSubmit={this.handleSubmit}>
        <Form.Input 
            label="Email"
            autoFocus
            required
            name="email"
            value={email}
            placeholder='Email'
            type="email"
            onChange={this.handleChange}
          />
          <Form.Input 
            label="Password"
            required
            name="password"
            value={password}
            placeholder='Password'
            type="password"
            onChange={this.handleChange}
          />
          <Form.Input 
            label="Password Cofirmation"
            required
            name="passwordConfirmation"
            value={passwordConfirmation}
            placeholder='Password'
            type="password"
            onChange={this.handleChange}
            />
          <Form.Button color="purple">Submit</Form.Button>  
        </Form>
      </div>
    
    )
  }
}

const ConnectedRegister = (props) => (
  <AuthConsumer>
    { auth => (
      <Register {...props} auth={auth} /> 
    )}
  </AuthConsumer>
);

export default ConnectedRegister;