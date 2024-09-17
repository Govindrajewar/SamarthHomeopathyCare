import React from "react";
import "../style/Register.css";
import { Form } from "antd";
import { Link } from "react-router-dom";

function Register() {
  const onFinishHandler = (values) => {
    console.log("Received values of form:", values);
  };

  return (
    <>
      <div className="form-container">
        <Form layout="vertical" onFinish={onFinishHandler}>
          <h3>Register Form</h3>

          <Form.Item label="Name" name="name">
            <input type="text" required />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <input type="password" required />
          </Form.Item>

          <Link to="/login" className="ms-2">
            Already User Login Here
          </Link>
          <br />

          <button className="btn btn-primary">Register</button>
        </Form>
      </div>
    </>
  );
}

export default Register;
