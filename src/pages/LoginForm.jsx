import React from "react";
import Joi from "joi";
import Form from "../components/common/Form";

export default class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };

  schema = Joi.object({
    username: Joi.string().required().min(4).label("Username"),
    password: Joi.string().required().label("Password"),
  });

  doSubmit = () => {
    // Call the server
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username", { autoFocus: true })}
          {this.renderInput("password", "Password", { type: "password" })}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}
