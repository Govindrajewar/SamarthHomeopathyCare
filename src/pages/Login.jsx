import React from "react";
import "../style/Login.css";
import { Form } from "antd";
import { Link } from "react-router-dom";

function Login() {
  const onFinishHandler = (values) => {
    console.log("Received values of form:", values);
  };

  return (
    <>
      <div className="form-container-login">
        <Form layout="vertical" onFinish={onFinishHandler}>
          <h3>Login Form</h3>

          <Form.Item label="Email" name="email">
            <input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <input type="password" required />
          </Form.Item>

          <Link to="/register" className="ms-2">
            Not a User, Register Here
          </Link>
          <br />

          <button className="btn btn-primary">Log In</button>
        </Form>
      </div>
    </>
  );
}

export default Login;
