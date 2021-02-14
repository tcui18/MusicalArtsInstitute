import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Header } from "semantic-ui-react";
class Landing extends Component {
  render() {
    return (
      <Container textAlign="center" style={{ height: "75vh" }}>
        <br />
        <Header as="h1">Welcome to Musical Arts Institute Login Page!</Header>
        <Header as="h2">
          If the institute gave you an account, you can login below.
        </Header>
        <Button
          style={{ transform: "translate(0px , 250%)" }}
          size="huge"
          primary
          as="a"
          href="/login"
        >
          Login
        </Button>
      </Container>
    );
  }
}
export default Landing;
