import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import { connect } from 'react-redux'

import axios from 'axios';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }

    // Binding this to the callbacks
    this.logIn = this.logIn.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);

  }

  handleUsernameChange(event) {
    this.setState({username: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  logIn() {
    // TODO: Route handling must be implemented here for this to work
    // axios.post(`http://localhost:4000/api/users/login`,
    //   {
    //     username: this.state.username,
    //     password: this.state.password,
    //   }).then((result) => {
    //     this.props.history.push("/admin/dashboard");
    //   });
    this.props.authenticate();

    // FAKED:
    this.props.history.push("/admin/dashboard");
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
            <Card
              title="DNA-Dashboard"
              category="Login"
              ctTableFullWidth
              ctTableResponsive
              content={
                <form class="mx-3">
                  <FormInputs
                    ncols={["col-md-6"]}
                    properties={[
                      {
                        label: "Username",
                        type: "text",
                        bsClass: "form-control",
                        placeholder: "Your username...",
                        onChange: this.handleUsernameChange,
                      },
                    ]}
                  />
                  <FormInputs
                    ncols={["col-md-6"]}
                    properties={[
                      {
                        label: "Password",
                        type: "password",
                        bsClass: "form-control",
                        placeholder: "Your password...",
                        onChange: this.handlePasswordChange,
                      },
                    ]}
                  />
                  <div className="clearfix" />
                  <Button bsStyle="info" pullLeft fill onClick={this.logIn}>
                    Log In
                  </Button>
                </form>
              } />
          </Col>
        </Row>
      </Grid>
    </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     ctr: state.counter
//   }
// }

const mapDispatchToProps = dispatch => {
  return {
    authenticate: () => dispatch({type: 'AUTHENTICATE'})
  };
};

export default connect(null, mapDispatchToProps)(LogIn);
