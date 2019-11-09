import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Form, Segment, Header, Button } from 'semantic-ui-react';

class Login extends React.Component {
  state = { email: '', password: "" }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, } = this.state;
    this.props.auth.handleLogin({ email, password, } ,this.props.histroy); 
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  render() {
    const {email, password, } = this.state;

    return(
      <Segment basic>
        <Header as="h1" textAlign="center">Login</Header>
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
          <Segment textAlign="center" basic>
            <Button color="purple">Submit</Button>  
          </Segment>
        </Form>
      </Segment>
    )
  }
}

export default class ConnectedLogin extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <Login {...this.props} auth={auth} /> }
      </AuthConsumer>
    )
  }
}