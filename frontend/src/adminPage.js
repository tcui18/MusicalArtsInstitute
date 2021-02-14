import React, { Component } from "react";
import {
  Container,
  Header,
  Button,
  Grid,
  Modal,
  Form,
  Radio,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import Register from "./components/auth/Register";
class adminPage extends Component {
  state = { register: false, registerInfo: {} };

  handleChange() {}
  submitData(data) {
    return data;
  }
  registrationForm() {
    return (
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input size="small" placeholder="First Name" />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder="Last Name" />
        </Form.Field>
        <Form.Field>
          <label>Username</label>
          <input />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input />
        </Form.Field>
        <Form.Field>
          <Radio
            label="Student"
            name="radioGroup"
            value="this"
            checked={this.state.value === "this"}
            onChange={this.handleChange}
          />
          <br />
          <Radio
            label="Staff"
            name="radioGroup"
            value="this"
            checked={this.state.value === "this"}
            onChange={this.handleChange}
          />
          <br />
          <Radio
            label="Parent"
            name="radioGroup"
            value="this"
            checked={this.state.value === "this"}
            onChange={this.handleChange}
          />
          <br />
          <Radio
            label="Coordinator"
            name="radioGroup"
            value="this"
            checked={this.state.value === "this"}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Button primary type="submit">
          Submit
        </Button>
      </Form>
    );
  }

  renderRegister() {
    if (this.state.register) {
      return <Register></Register>;
    } else {
      return <></>;
    }
  }
  render() {
    return (
      <>
        <Container>
          <Header textAlign="center" as="h1">
            Admin Page
          </Header>
          <Grid>
            <Grid.Row></Grid.Row>
            <Grid.Row>
              <Header as="h2">Hello {this.props.name} !</Header>
            </Grid.Row>
            <Grid.Row>
              <Button primary onClick={this.props.onLogoutClick}>
                Log Out
              </Button>
            </Grid.Row>
            <Grid.Row>
              <Header as="h3">Here is your donation link:</Header>
            </Grid.Row>
            <Grid.Row>
              <Header as="h3">You can also register users here:</Header>
            </Grid.Row>
            <Link to="/register">
              {this.state.register ? "Cancel" : "Register Users"}
            </Link>
          </Grid>
          {this.renderRegister()}
        </Container>
      </>
    );
  }
}

export default adminPage;
